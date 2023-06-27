/**
 * Copyright (c) 2023, WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

import React, { useState } from "react";
import { Circle } from "@wso2-ei/low-code-diagram";
import { getComponent } from "../../util";
import { WorkerLine } from "../worker-line";
import { DropMediatorProperty } from "../PropertyPanels/index";
import {
  DiagramEditorLangClientInterface,
  GetCompletionResponse,
} from "@wso2-ei/low-code-editor-commons";

interface SquareProps {
  model: Circle;
  getDiagramEditorLangClient?: () => Promise<DiagramEditorLangClientInterface>;
  textDocumentUrl: string;
  textDocumentFsPath: string;
  items: GetCompletionResponse[];
  previousComponentStartPosition: number;
}

export function Drop(props: SquareProps) {
  const {
    model,
    getDiagramEditorLangClient,
    textDocumentUrl,
    textDocumentFsPath,
    items,
    previousComponentStartPosition,
  } = props;
  const [open, setOpen] = React.useState(false);

  const viewState = model.viewState;
  model.tag;
  const components: JSX.Element[] = [];

  model.children.forEach((child: any) => {
    components.push(getComponent(child.type, { model: child }));
  });

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleButtonClick = async () => {
    setOpen(true);
    setIsClicked(true);
  };

  const handleCancelClick = (value: boolean) => {
    setOpen(value);
  };

  return (
    <>
      <svg
        x={viewState.bBox.x}
        y={viewState.bBox.y}
        width={viewState.bBox.r * 2}
        height={viewState.bBox.r * 2}
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => handleButtonClick()}
      >
        <circle id="Ellipse 1" cx="300" cy="300" r="300" fill="#3D84B8" />
        <path
          id="Drop"
          d="M257.051 526H244.161V489.636H257.158C260.815 489.636 263.964 490.364 266.604 491.82C269.243 493.264 271.273 495.342 272.694 498.053C274.126 500.763 274.842 504.007 274.842 507.783C274.842 511.571 274.126 514.826 272.694 517.548C271.273 520.271 269.232 522.36 266.568 523.816C263.917 525.272 260.744 526 257.051 526ZM251.849 519.413H256.732C259.004 519.413 260.916 519.01 262.467 518.205C264.029 517.388 265.201 516.128 265.982 514.423C266.775 512.707 267.172 510.493 267.172 507.783C267.172 505.096 266.775 502.9 265.982 501.195C265.201 499.491 264.035 498.236 262.484 497.431C260.934 496.626 259.022 496.224 256.749 496.224H251.849V519.413ZM280.395 526V498.727H287.729V503.486H288.013C288.51 501.793 289.344 500.515 290.516 499.651C291.688 498.775 293.037 498.337 294.564 498.337C294.943 498.337 295.352 498.36 295.79 498.408C296.228 498.455 296.612 498.52 296.944 498.603V505.315C296.589 505.208 296.097 505.113 295.47 505.031C294.843 504.948 294.269 504.906 293.748 504.906C292.635 504.906 291.641 505.149 290.765 505.634C289.901 506.108 289.214 506.771 288.705 507.623C288.208 508.475 287.959 509.458 287.959 510.57V526H280.395ZM311.907 526.533C309.149 526.533 306.764 525.947 304.752 524.775C302.751 523.591 301.207 521.946 300.118 519.839C299.029 517.72 298.484 515.264 298.484 512.47C298.484 509.653 299.029 507.191 300.118 505.084C301.207 502.965 302.751 501.32 304.752 500.148C306.764 498.964 309.149 498.372 311.907 498.372C314.665 498.372 317.045 498.964 319.045 500.148C321.057 501.32 322.608 502.965 323.697 505.084C324.786 507.191 325.331 509.653 325.331 512.47C325.331 515.264 324.786 517.72 323.697 519.839C322.608 521.946 321.057 523.591 319.045 524.775C317.045 525.947 314.665 526.533 311.907 526.533ZM311.943 520.673C313.198 520.673 314.245 520.318 315.086 519.608C315.926 518.886 316.559 517.903 316.985 516.661C317.423 515.418 317.642 514.003 317.642 512.417C317.642 510.831 317.423 509.416 316.985 508.173C316.559 506.93 315.926 505.948 315.086 505.226C314.245 504.504 313.198 504.143 311.943 504.143C310.676 504.143 309.611 504.504 308.747 505.226C307.895 505.948 307.249 506.93 306.811 508.173C306.385 509.416 306.172 510.831 306.172 512.417C306.172 514.003 306.385 515.418 306.811 516.661C307.249 517.903 307.895 518.886 308.747 519.608C309.611 520.318 310.676 520.673 311.943 520.673ZM330.249 536.227V498.727H337.706V503.308H338.044C338.375 502.574 338.855 501.829 339.482 501.071C340.121 500.302 340.95 499.662 341.968 499.153C342.998 498.633 344.276 498.372 345.803 498.372C347.792 498.372 349.626 498.893 351.307 499.935C352.988 500.964 354.332 502.521 355.338 504.604C356.344 506.676 356.847 509.274 356.847 512.399C356.847 515.441 356.356 518.01 355.373 520.105C354.403 522.188 353.077 523.769 351.396 524.846C349.727 525.911 347.857 526.444 345.785 526.444C344.317 526.444 343.069 526.201 342.039 525.716C341.021 525.231 340.186 524.621 339.535 523.887C338.884 523.141 338.387 522.39 338.044 521.632H337.813V536.227H330.249ZM337.653 512.364C337.653 513.985 337.878 515.4 338.328 516.607C338.778 517.815 339.429 518.756 340.281 519.43C341.133 520.093 342.169 520.425 343.388 520.425C344.619 520.425 345.661 520.087 346.513 519.413C347.365 518.726 348.011 517.779 348.449 516.572C348.898 515.353 349.123 513.95 349.123 512.364C349.123 510.789 348.904 509.404 348.466 508.209C348.028 507.013 347.383 506.078 346.531 505.403C345.679 504.729 344.631 504.391 343.388 504.391C342.157 504.391 341.115 504.717 340.263 505.368C339.423 506.019 338.778 506.942 338.328 508.138C337.878 509.333 337.653 510.742 337.653 512.364Z"
          fill="white"
        />
        <path
          id="Vector"
          d="M388.839 320.861L364.712 346.475L340.585 320.861L324.424 337.937L348.665 363.43L324.424 388.924L340.585 406L364.712 380.386L388.839 406L405 388.924L380.759 363.43L405 337.937M216.762 159C204.129 159 194 169.703 194 183.051V375.456C194 388.804 204.129 399.506 216.762 399.506H305.646C299.614 388.563 296.427 376.057 296.427 363.43C296.427 359.462 296.769 355.373 297.338 351.405H216.762V327.354H305.646C310.881 317.734 318.165 309.316 326.928 303.304H216.762V279.253H353.331V292.241C357.087 291.639 360.956 291.278 364.712 291.278C368.581 291.278 372.337 291.639 376.093 292.241V231.152L307.808 159M296.427 177.038L359.022 243.177H296.427V177.038Z"
          fill="white"
        />
      </svg>

      <WorkerLine model={model} />
      {components}
      {isClicked && (
        <DropMediatorProperty modalOpen={open} modalClose={handleCancelClick} />
      )}
    </>
  );
}
