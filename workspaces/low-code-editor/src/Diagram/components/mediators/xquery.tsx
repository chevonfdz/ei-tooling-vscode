import React from "react";
import { Circle } from "@wso2-ei/low-code-diagram";
import { getComponent } from "../../util";
import { WorkerLine } from "../worker-line";

interface SquareProps {
    model: Circle;
}

export function Xquery(props: SquareProps) {
    const { model } = props;

    const viewState = model.viewState;
    const components: JSX.Element[] = [];

    model.children.forEach(child => {
        components.push(getComponent(child.type, { model: child }));
    })

    return (
        <>
            <svg x={viewState.bBox.x} y={viewState.bBox.y} width={viewState.bBox.r * 2} height={viewState.bBox.r * 2} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="300" cy="300" r="300" fill="#644A9B" />
                <path d="M234.295 465.909L240.162 475.824H240.389L246.284 465.909H253.23L244.352 480.455L253.429 495H246.355L240.389 485.071H240.162L234.196 495H227.151L236.256 480.455L227.321 465.909H234.295ZM266.735 484.886H271.962L274.59 488.267L277.175 491.278L282.048 497.386H276.309L272.957 493.267L271.238 490.824L266.735 484.886ZM282.488 480.455C282.488 483.627 281.887 486.326 280.684 488.551C279.491 490.777 277.862 492.476 275.798 493.651C273.743 494.815 271.432 495.398 268.866 495.398C266.281 495.398 263.96 494.811 261.906 493.636C259.851 492.462 258.227 490.762 257.033 488.537C255.84 486.312 255.244 483.617 255.244 480.455C255.244 477.282 255.84 474.583 257.033 472.358C258.227 470.133 259.851 468.437 261.906 467.273C263.96 466.098 266.281 465.511 268.866 465.511C271.432 465.511 273.743 466.098 275.798 467.273C277.862 468.437 279.491 470.133 280.684 472.358C281.887 474.583 282.488 477.282 282.488 480.455ZM276.252 480.455C276.252 478.4 275.944 476.667 275.329 475.256C274.723 473.845 273.866 472.775 272.758 472.045C271.65 471.316 270.353 470.952 268.866 470.952C267.379 470.952 266.082 471.316 264.974 472.045C263.866 472.775 263.004 473.845 262.388 475.256C261.782 476.667 261.479 478.4 261.479 480.455C261.479 482.509 261.782 484.242 262.388 485.653C263.004 487.064 263.866 488.134 264.974 488.864C266.082 489.593 267.379 489.957 268.866 489.957C270.353 489.957 271.65 489.593 272.758 488.864C273.866 488.134 274.723 487.064 275.329 485.653C275.944 484.242 276.252 482.509 276.252 480.455ZM300.922 485.71V473.182H306.973V495H301.163V491.037H300.936C300.444 492.315 299.625 493.343 298.479 494.119C297.342 494.896 295.955 495.284 294.317 495.284C292.858 495.284 291.575 494.953 290.467 494.29C289.359 493.627 288.493 492.685 287.868 491.463C287.252 490.241 286.94 488.778 286.93 487.074V473.182H292.982V485.994C292.991 487.282 293.337 488.3 294.018 489.048C294.7 489.796 295.614 490.17 296.76 490.17C297.489 490.17 298.171 490.005 298.805 489.673C299.44 489.332 299.951 488.83 300.339 488.168C300.737 487.505 300.931 486.686 300.922 485.71ZM321.756 495.426C319.512 495.426 317.58 494.972 315.961 494.062C314.351 493.144 313.111 491.847 312.239 490.17C311.368 488.485 310.933 486.491 310.933 484.19C310.933 481.946 311.368 479.976 312.239 478.281C313.111 476.586 314.337 475.265 315.918 474.318C317.509 473.371 319.375 472.898 321.515 472.898C322.954 472.898 324.294 473.13 325.535 473.594C326.785 474.048 327.874 474.735 328.802 475.653C329.739 476.572 330.469 477.727 330.989 479.119C331.51 480.502 331.771 482.121 331.771 483.977V485.639H313.347V481.889H326.075C326.075 481.018 325.885 480.246 325.506 479.574C325.128 478.902 324.602 478.376 323.93 477.997C323.267 477.609 322.495 477.415 321.614 477.415C320.696 477.415 319.881 477.628 319.171 478.054C318.47 478.471 317.921 479.034 317.523 479.744C317.126 480.445 316.922 481.226 316.913 482.088V485.653C316.913 486.733 317.112 487.666 317.509 488.452C317.916 489.238 318.489 489.844 319.228 490.27C319.967 490.696 320.843 490.909 321.856 490.909C322.528 490.909 323.144 490.814 323.702 490.625C324.261 490.436 324.739 490.152 325.137 489.773C325.535 489.394 325.838 488.93 326.046 488.381L331.643 488.75C331.359 490.095 330.776 491.269 329.896 492.273C329.024 493.267 327.897 494.044 326.515 494.602C325.142 495.152 323.556 495.426 321.756 495.426ZM335.719 495V473.182H341.586V476.989H341.813C342.211 475.634 342.879 474.612 343.816 473.92C344.754 473.22 345.833 472.869 347.055 472.869C347.358 472.869 347.684 472.888 348.035 472.926C348.385 472.964 348.693 473.016 348.958 473.082V478.452C348.674 478.366 348.281 478.291 347.779 478.224C347.277 478.158 346.818 478.125 346.401 478.125C345.511 478.125 344.716 478.319 344.015 478.707C343.324 479.086 342.774 479.616 342.367 480.298C341.969 480.98 341.771 481.766 341.771 482.656V495H335.719ZM356.487 503.182C355.719 503.182 355 503.12 354.327 502.997C353.665 502.884 353.115 502.737 352.68 502.557L354.043 498.04C354.754 498.258 355.393 498.376 355.961 498.395C356.539 498.414 357.036 498.281 357.452 497.997C357.879 497.713 358.224 497.23 358.489 496.548L358.844 495.625L351.018 473.182H357.381L361.898 489.205H362.126L366.685 473.182H373.092L364.612 497.358C364.204 498.532 363.65 499.555 362.95 500.426C362.258 501.307 361.382 501.984 360.322 502.457C359.261 502.94 357.983 503.182 356.487 503.182Z" fill="white" />
                <path d="M322.5 187H232.5C220.012 187 210 197.125 210 209.5V389.5C210 401.988 220.012 412 232.5 412H367.5C379.988 412 390 401.988 390 389.5V254.5L322.5 187ZM367.5 389.5H232.5V209.5H311.25V265.75H367.5V389.5ZM272.325 340.562L295.838 364.075L281.438 378.25L243.75 340.562L281.438 302.875L295.838 317.05L272.325 340.562ZM356.25 340.562L318.562 378.25L304.275 364.075L327.788 340.562L304.275 317.05L318.562 302.875L356.25 340.562Z" fill="white" />
            </svg>


            <WorkerLine
                model={model}
            />
            {components}
        </>
    )
}