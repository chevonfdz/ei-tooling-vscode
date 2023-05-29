import React, { Component } from 'react'
import { Col, Form, Modal, Row, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
type State = {
    selectedCacheMImp: string; 
    selectedCacheType: string;
    selectedSequenceType: string;
    selectedCacheProtocolType: string;
    selectedScope: string;
    selectedImpType: string;
};

export default class CacheMediatorProperty  extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedCacheMImp: "Default",
            selectedCacheType: "FINDER",
            selectedSequenceType: "ANONYMOUS",
            selectedCacheProtocolType: "HTTP",
            selectedScope: "Per_Host",
            selectedImpType: "memory",
    };
}
handleCacheMImpSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedCacheMImp: event.target.value });
};
handleCacheTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedCacheType: event.target.value });
};
handleSequenceTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedSequenceType: event.target.value });
};
handleCacheProtocolTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedCacheProtocolType: event.target.value });
};
handleScopeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedScope: event.target.value });
};
handleImpTypeSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedImpType: event.target.value });
};

    
    
  render() {
    const { selectedCacheMImp, selectedCacheType, selectedSequenceType, selectedCacheProtocolType, selectedScope, selectedImpType } = this.state;

    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Cache Mediator Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Type
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className="CacheMImp">Cache Mediator Implementation</Form.Label>
                            <Form.Select value={selectedCacheMImp} onChange={this.handleCacheMImpSelectChange}>
                                <option value="Default">Default</option>
                                <option value="Compatible611">611 Compatible</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Row>
                <br />  
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>  
                            <Form.Label className="CacheType">Cache Type</Form.Label>
                            <OverlayTrigger placement="right"
                                overlay={
                                    <Tooltip id="help-tooltip">
                                    Finder: <br />Is used to search for the request hash of incoming messages <br /> <br />
                                    Collector: <br /> Is used to collect the response messages in the cacheS
                                    </Tooltip>
                                }
                                >
                                <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                </span>
                            </OverlayTrigger>

                            <Form.Select value={selectedCacheType} onChange={this.handleCacheTypeSelectChange}>
                                <option value="FINDER">FINDER</option>
                                <option value="COLLECTOR">COLLECTOR</option>
                            </Form.Select>     
                            {(selectedCacheMImp === "Default" && selectedCacheType === "FINDER") && (
                                <>
                                    <Form.Label className="CacheTimeout">Cache Timeout&#40;S&#41;</Form.Label>
                                    <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The time duration that the cache should be retained specified in seconds. The cache expires once this time duration elapses</Tooltip>}>
                                        <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                        </span>
                                    </OverlayTrigger>
                                    <Form.Control type="text" defaultValue="120" />
                                    <Form.Label className="MaxMsgSize">Max Message Size&#40;bytes&#41;</Form.Label>
                                    <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The maximum size of the message to be cached. This should be specified in bytes</Tooltip>}>
                                        <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                        </span>
                                    </OverlayTrigger>
                                    <Form.Control type="text" defaultValue="2000" />
                                    <br />  
                                    <Row className='mb-4'>
                                        <Modal.Title className='text-secondary'>
                                            Implementation
                                        </Modal.Title>
                                        <Form>
                                            <Form.Group> 
                                                <Form.Label className="MaxEntryCount">Max Entry Count</Form.Label>
                                                <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The maximum number of element to be cached. The default size is 1000</Tooltip>}>
                                                    <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                    </span>
                                                </OverlayTrigger>
                                                <Form.Control type="text" defaultValue="1000" />
                                            </Form.Group>
                                        </Form> 
                                    </Row>       
                                    <br />  
                                    <Row className='mb-4'>
                                        <Modal.Title className='text-secondary'>
                                            On Case Hit
                                        </Modal.Title>
                                        <Form>
                                            <Form.Group> 
                                                <Form.Label className="SequenceType">Sequence Type</Form.Label>
                                                <Form.Select value={selectedSequenceType} onChange={this.handleSequenceTypeSelectChange}>
                                                    <option value="ANONYMOUS">ANONYMOUS</option>
                                                    <option value="REGISTRY_REFERENCE">REGISTRY_REFERENCE</option>
                                                </Form.Select>
                                                {selectedSequenceType === "REGISTRY_REFERENCE" && (
                                                    <>
                                                        <Form.Label className="SequenceKey">Sequence Key</Form.Label>
                                                        {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                                        <Form.Control type="text" readOnly/>
                                                    </>
                                                )}
                                            </Form.Group>
                                        </Form> 
                                    </Row>
                                    <br />  
                                    <Row className='mb-4'>
                                        <Modal.Title className='text-secondary'>
                                            Protocol
                                        </Modal.Title>
                                        <Form>
                                            <Form.Group> 
                                                <Form.Label className="CacheProtocolType">Cache Protocol Type</Form.Label>
                                                <Form.Select value={selectedCacheProtocolType} onChange={this.handleCacheProtocolTypeSelectChange}>
                                                    <option value="HTTP">HTTP</option>
                                                </Form.Select>
                                                <Form.Label className="CacheProtocolMethods">Cache Protocol Methods</Form.Label>
                                                <Form.Control type="text" defaultValue="*" />
                                                <Form.Label className="HeadersToExcludeInHash">Headers To Exclude In Hash</Form.Label>
                                                <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">A comma separated list of headers to ignore when hashing an incoming messages. If you want to exclude all headers when hashing an incoming message, specify*</Tooltip>}>
                                                    <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                    </span>
                                                </OverlayTrigger>
                                                <Form.Control type="text" placeholder="eg: Headers To Exclude In Hash" />
                                                <Form.Label className="HeadersToExcludeInHash">Headers To Include In Hash</Form.Label>
                                                <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">A comma separated list of headers to include when hashing an incoming messages. If you want to include all headers when hashing an incoming message, specify*</Tooltip>}>
                                                    <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                    </span>
                                                </OverlayTrigger>
                                                <Form.Control type="text" placeholder="eg: Headers To Include In Hash" />
                                                <Form.Label className="ResponseCodes">Response Codes</Form.Label>
                                                <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Specify the response codes to be cached as a regular expression. If the HTTP status code of a response matches the regular expression, the response should be cached. The default setting to cache any response code</Tooltip>}>
                                                    <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                    </span>
                                                </OverlayTrigger>
                                                <Form.Control type="text" defaultValue=".*" />
                                                <br />
                                                <Form.Group style={{ textAlign: "left" }}>
                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                        <Form.Check type="checkbox" className="EnableCacheControl" label={<span style={{ marginLeft: "10px" }}>Enable Cache Control</span>} />
                                                        <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Whether the Cache mediator should honor the Cache-Control header &#40;no-cache, no-store, max-age headers&#41;</Tooltip>} >
                                                        <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                            <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                        </span>
                                                        </OverlayTrigger>
                                                    </div>
                                                </Form.Group>
                                                <Form.Group style={{ textAlign: "left" }}>
                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                        <Form.Check type="checkbox" className="IncludeAgeHeader" label={<span style={{ marginLeft: "10px" }}>Include Age Header</span>} />
                                                        <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Whether an Age header needs to be included when returning the cached response</Tooltip>} >
                                                        <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                            <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                        </span>
                                                        </OverlayTrigger>
                                                    </div>
                                                    <br />
                                                </Form.Group>
                                                <Form.Label className="HashGenerator">Hash Generator</Form.Label>
                                                <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Used to define the logic used by the Cache mediator to evaluate to evaluate the hash values of incoming messages. The value specified here should be a class that implement the org.separated.carbon.mediator.cache.digest.DigestGenerator class interface</Tooltip>}>
                                                    <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                    </span>
                                                </OverlayTrigger>
                                                <Form.Control type="text" defaultValue="org.wso2.carbon.mediator.cache.digest.HttpRequestHashGenerator" />
                                            </Form.Group>
                                        </Form> 
                                    </Row>
                                </>
                            )}
                            {(selectedCacheMImp === "Default" && selectedCacheType === "COLLECTOR") && (
                                <></>
                            )}
                            {(selectedCacheMImp === "Compatible611" && selectedCacheType === "FINDER") && (
                                <>         
                                    <Form.Label className="CacheTypeId">Id</Form.Label>
                                    <Form.Control type="text" placeholder="eg: Id" />
                                    <Form.Label className="CacheTimeout">Cache Timeout&#40;S&#41;</Form.Label>
                                    <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The time duration that the cache should be retained specified in seconds. The cache expires once this time duration elapses</Tooltip>}>
                                        <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                        </span>
                                    </OverlayTrigger>
                                    <Form.Control type="text" defaultValue="120" />
                                    <Form.Label className="MaxMsgSize">Max Message Size&#40;bytes&#41;</Form.Label>
                                    <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The maximum size of the message to be cached. This should be specified in bytes</Tooltip>}>
                                        <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                        </span>
                                    </OverlayTrigger>
                                    <Form.Control type="text" defaultValue="2000" />
                                    <Form.Label className="Scope">Scope</Form.Label>
                                    <Form.Select value={selectedScope} onChange={this.handleScopeSelectChange}>
                                        <option value="Per_Host">Per_Host</option>
                                        <option value="Per_Mediator">Per_Mediator</option>
                                    </Form.Select>
                                    <Form.Label className="HashGeneratorAttr">Hash Generator Attribute</Form.Label>
                                    <Form.Control type="text" defaultValue="org.wso2.carbon.mediator.cache.digest.DOMHASHGenerator" />
                                    <Row className='mb-4'>
                                        <Modal.Title className='text-secondary'>
                                            Implementation
                                        </Modal.Title>
                                        <Form>
                                            <Form.Group> 
                                                <Form.Label className="MaxEntryCount">Max Entry Count</Form.Label>
                                                <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">The maximum number of element to be cached. The default size is 1000</Tooltip>}>
                                                    <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                                    <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                                    </span>
                                                </OverlayTrigger>
                                                <Form.Control type="text" defaultValue="1000" />
                                                <Form.Label className="ImpType">Implementation Type</Form.Label>
                                                <Form.Select value={selectedImpType} onChange={this.handleImpTypeSelectChange}>
                                                    <option value="memory">memory</option>
                                                    <option value="disk">disk</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Form> 
                                    </Row>       
                                    <br />  
                                    <Row className='mb-4'>
                                        <Modal.Title className='text-secondary'>
                                            On Case Hit
                                        </Modal.Title>
                                        <Form>
                                            <Form.Group> 
                                                <Form.Label className="SequenceType">Sequence Type</Form.Label>
                                                <Form.Select value={selectedSequenceType} onChange={this.handleSequenceTypeSelectChange}>
                                                    <option value="ANONYMOUS">ANONYMOUS</option>
                                                    <option value="REGISTRY_REFERENCE">REGISTRY_REFERENCE</option>
                                                </Form.Select>
                                                {selectedSequenceType === "REGISTRY_REFERENCE" && (
                                                    <>
                                                        <Form.Label className="SequenceKey">Sequence Key</Form.Label>
                                                        {/* When a user clicks this textbox, the Resource Key Model appears.*/}
                                                        <Form.Control type="text" readOnly/>
                                                    </>
                                                )}
                                            </Form.Group>
                                        </Form> 
                                    </Row>
                                </>
                            )}
                            {(selectedCacheMImp === "Compatible611" && selectedCacheType === "COLLECTOR") && (
                                <>
                                    <Form.Label className="Scope">Scope</Form.Label>
                                    <Form.Select value={selectedScope} onChange={this.handleScopeSelectChange}>
                                        <option value="Per_Host">Per_Host</option>
                                        <option value="Per_Mediator">Per_Mediator</option>
                                    </Form.Select>
                                </>
                            )}
                        </Form.Group>
                    </Form>
                </Row>    
                <br />
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Misc
                    </Modal.Title>
                        <Form>
                            <Form.Group>
                                <Form.Label className='mt-2 mb-0'>Description</Form.Label>
                                    <OverlayTrigger placement="right" overlay={<Tooltip id="help-tooltip">Default description</Tooltip>}>
                                        <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                                        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
                                        </span>
                                    </OverlayTrigger>
                                <Form.Control as="textarea" placeholder='eg: None'/>                            
                            </Form.Group>
                        </Form>
                    </Row>     
            </Modal.Body>
        </> 
    )
  }
}