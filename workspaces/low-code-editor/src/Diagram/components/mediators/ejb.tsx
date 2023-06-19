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

import React from "react";
import { Circle } from "@wso2-ei/low-code-diagram";
import { getComponent } from "../../util";
import { WorkerLine } from "../worker-line";

interface SquareProps {
  model: Circle;
}

export function EJB(props: SquareProps) {
  const { model } = props;

  const viewState = model.viewState;
  const components: JSX.Element[] = [];

  model.children.forEach((child) => {
    components.push(getComponent(child.type, { model: child }));
  });

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
      >
        <circle cx="300" cy="300" r="300" fill="#B97059" />
        <path
          d="M256.161 532V495.636H280.663V501.975H263.849V510.64H279.403V516.979H263.849V525.661H280.734V532H256.161ZM301.335 495.636H308.935V520.991C308.935 523.335 308.408 525.371 307.355 527.099C306.313 528.828 304.863 530.159 303.004 531.094C301.146 532.03 298.986 532.497 296.524 532.497C294.334 532.497 292.345 532.112 290.558 531.343C288.782 530.562 287.374 529.378 286.332 527.792C285.29 526.194 284.775 524.187 284.787 521.773H292.44C292.463 522.732 292.659 523.554 293.026 524.241C293.405 524.915 293.919 525.436 294.57 525.803C295.233 526.158 296.015 526.336 296.914 526.336C297.861 526.336 298.66 526.135 299.311 525.732C299.974 525.318 300.477 524.714 300.82 523.921C301.164 523.128 301.335 522.152 301.335 520.991V495.636ZM315.291 532V495.636H329.851C332.526 495.636 334.758 496.033 336.545 496.826C338.332 497.619 339.676 498.72 340.575 500.129C341.475 501.525 341.925 503.135 341.925 504.958C341.925 506.379 341.641 507.627 341.073 508.705C340.504 509.77 339.723 510.646 338.729 511.332C337.746 512.007 336.622 512.487 335.355 512.771V513.126C336.74 513.185 338.036 513.576 339.244 514.298C340.463 515.02 341.451 516.032 342.209 517.334C342.967 518.624 343.345 520.163 343.345 521.95C343.345 523.88 342.866 525.602 341.907 527.117C340.96 528.621 339.557 529.81 337.699 530.686C335.841 531.562 333.55 532 330.828 532H315.291ZM322.98 525.714H329.247C331.39 525.714 332.952 525.306 333.935 524.489C334.917 523.661 335.409 522.56 335.409 521.187C335.409 520.181 335.166 519.293 334.681 518.523C334.195 517.754 333.503 517.15 332.603 516.712C331.715 516.274 330.656 516.055 329.425 516.055H322.98V525.714ZM322.98 510.853H328.679C329.733 510.853 330.668 510.67 331.485 510.303C332.313 509.924 332.964 509.391 333.438 508.705C333.923 508.018 334.166 507.195 334.166 506.237C334.166 504.923 333.698 503.863 332.763 503.058C331.84 502.253 330.526 501.851 328.821 501.851H322.98V510.853Z"
          fill="white"
        />
        <path d="M314 142L494.999 169H133.001L314 142Z" fill="white" />
        <path d="M314 435L133.001 408L494.999 408L314 435Z" fill="white" />
        <rect x="314" y="109" width="209" height="360" fill="#B97059" />
        <rect
          x="269.5"
          y="170.5"
          width="178"
          height="236"
          rx="8.5"
          fill="#B97059"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M376.453 239.224C376.453 239.224 320.293 252.31 347.223 281.161C355.188 289.656 345.171 297.309 345.171 297.309C345.171 297.309 365.286 287.743 355.927 275.498C347.223 264.249 340.655 258.662 376.453 239.224ZM339.752 248.407C373.004 223.918 355.927 208 355.927 208C362.823 233.254 331.624 240.907 320.375 256.672C312.657 267.386 324.152 278.942 339.506 292.181C333.676 279.172 313.068 267.998 339.752 248.407ZM317.912 326.39C292.624 332.971 333.348 346.517 365.451 333.736C362.331 332.589 359.293 331.211 356.419 329.604C345.253 331.976 333.758 332.436 322.428 330.981C311.672 329.757 317.912 326.39 317.912 326.39ZM361.592 313.533C347.223 316.441 332.362 317.13 317.748 315.523C306.992 314.528 314.053 309.63 314.053 309.63C286.137 318.278 329.489 327.997 368.242 317.436C365.861 316.594 363.562 315.14 361.592 313.533ZM389.672 338.787C389.672 338.787 394.352 342.384 384.663 345.139C365.943 350.343 307.238 351.95 290.982 345.369C285.152 342.996 296.154 339.706 299.603 339.017C301.491 338.558 303.379 338.405 305.268 338.405C298.782 334.272 263.148 346.823 287.287 350.343C352.724 360.292 406.667 345.751 389.672 338.787ZM367.175 301.594C369.556 300.14 372.101 298.916 374.729 297.845C374.729 297.845 362.331 299.834 349.933 300.906C336.796 302.13 323.577 302.283 310.44 301.365C291.146 298.993 321.032 292.181 321.032 292.181C312 292.181 303.133 294.171 295.087 297.921C278.255 305.574 336.96 309.018 367.175 301.594ZM374.564 320.114C374.4 320.421 374.236 320.65 373.907 320.88C415.042 310.854 399.935 285.37 380.23 291.722C379.162 292.181 378.259 292.794 377.684 293.636C378.834 293.253 379.983 292.947 381.215 292.717C391.067 290.88 405.189 305.191 374.564 320.114ZM375.632 355.394C350.918 359.374 325.63 359.68 300.752 356.465C300.752 356.465 304.529 359.374 323.824 360.521C353.381 362.282 398.785 359.527 399.853 346.517C400.099 346.593 397.964 351.491 375.632 355.394Z"
          fill="white"
        />
        <rect x="133" y="169" width="181" height="239" fill="white" />
        <path
          d="M184.614 361V215.545H272.398V231.17H202.227V280.318H267.852V295.943H202.227V345.375H273.534V361H184.614Z"
          fill="#B97059"
        />
      </svg>

      <WorkerLine model={model} />
      {components}
    </>
  );
}
