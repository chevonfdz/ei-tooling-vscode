/*
Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
*
* WSO2 Inc. licenses this file to you under the Apache License,
* Version 2.0 (the "License"); you may not use this file except
* in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied. See the License for the
* specific language governing permissions and limitations
* under the License.
*/

package org.eclipse.lemminx.extensions.synapse.xsd;

import org.eclipse.lemminx.dom.DOMDocument;
import org.eclipse.lemminx.extensions.contentmodel.model.ContentModelManager;
import org.eclipse.lemminx.extensions.synapse.contentmodel.model.SynapseContentModelManager;
import org.eclipse.lemminx.extensions.synapse.xsd.contentmodel.SynapseCMXSDContentModelProvider;
import org.eclipse.lemminx.extensions.contentmodel.model.ContentModelProvider;
import org.eclipse.lemminx.services.extensions.IXMLExtension;
import org.eclipse.lemminx.services.extensions.XMLExtensionsRegistry;
import org.eclipse.lemminx.services.extensions.save.ISaveContext;
import org.eclipse.lemminx.utils.DOMUtils;
import org.eclipse.lsp4j.InitializeParams;

/**
 * XSD plugin.
 */
public class SynapseXSDPlugin implements IXMLExtension {

    private SynapseXSDURIResolverExtension uiResolver;

    private SynapseContentModelManager contentModelManager;

    @Override
    public void doSave(ISaveContext context) {
        String documentURI = context.getUri();
        DOMDocument document = context.getDocument(documentURI);
        if (DOMUtils.isXSD(document)) {
            context.collectDocumentToValidate(d -> {
                DOMDocument xml = context.getDocument(d.getDocumentURI());
                return contentModelManager.dependsOnGrammar(xml, context.getUri());
            });
        }
    }

    @Override
    public void start(InitializeParams params, XMLExtensionsRegistry registry) {
        // Register resolver
        uiResolver = new SynapseXSDURIResolverExtension();
        registry.getResolverExtensionManager().registerResolver(uiResolver);
        // register XSD content model provider
        ContentModelProvider modelProvider = new SynapseCMXSDContentModelProvider(
                registry.getResolverExtensionManager());
        contentModelManager = registry.getComponent(SynapseContentModelManager.class);
        contentModelManager.registerModelProvider(modelProvider);
        // register completion, diagnostic particpant
    }

    @Override
    public void stop(XMLExtensionsRegistry registry) {
        registry.getResolverExtensionManager().unregisterResolver(uiResolver);
    }

    public SynapseContentModelManager getContentModelManager() {
        return contentModelManager;
    }
}
