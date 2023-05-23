import React from "react";
import { Circle } from "@wso2-ei/low-code-diagram";
import { getComponent } from "../../util";
import { WorkerLine } from "../worker-line";

interface SquareProps {
    model: Circle;
}

export function Header(props: SquareProps) {
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
                <path d="M217.161 516V479.636H224.849V494.64H240.456V479.636H248.126V516H240.456V500.979H224.849V516H217.161ZM266.752 516.533C263.947 516.533 261.532 515.964 259.508 514.828C257.496 513.68 255.945 512.058 254.856 509.963C253.767 507.856 253.222 505.364 253.222 502.488C253.222 499.683 253.767 497.22 254.856 495.102C255.945 492.983 257.478 491.331 259.455 490.148C261.443 488.964 263.775 488.372 266.45 488.372C268.25 488.372 269.924 488.662 271.475 489.242C273.038 489.81 274.399 490.669 275.559 491.817C276.731 492.965 277.642 494.409 278.293 496.149C278.944 497.877 279.27 499.902 279.27 502.222V504.299H256.241V499.612H272.15C272.15 498.522 271.913 497.558 271.44 496.717C270.966 495.877 270.309 495.22 269.469 494.746C268.64 494.261 267.675 494.018 266.575 494.018C265.426 494.018 264.408 494.285 263.521 494.817C262.645 495.338 261.958 496.043 261.461 496.93C260.964 497.806 260.709 498.783 260.697 499.86V504.317C260.697 505.666 260.946 506.832 261.443 507.815C261.952 508.797 262.668 509.555 263.592 510.087C264.515 510.62 265.61 510.886 266.876 510.886C267.717 510.886 268.486 510.768 269.185 510.531C269.883 510.295 270.481 509.939 270.978 509.466C271.475 508.992 271.854 508.412 272.114 507.726L279.11 508.188C278.755 509.868 278.027 511.336 276.926 512.591C275.837 513.834 274.429 514.804 272.7 515.503C270.984 516.189 269.001 516.533 266.752 516.533ZM291.983 516.515C290.243 516.515 288.692 516.213 287.331 515.609C285.97 514.994 284.893 514.088 284.099 512.893C283.318 511.685 282.928 510.182 282.928 508.383C282.928 506.868 283.206 505.595 283.762 504.565C284.318 503.536 285.076 502.707 286.035 502.08C286.994 501.452 288.083 500.979 289.302 500.659C290.533 500.339 291.823 500.115 293.173 499.984C294.759 499.819 296.037 499.665 297.008 499.523C297.978 499.369 298.683 499.144 299.121 498.848C299.559 498.552 299.778 498.114 299.778 497.534V497.428C299.778 496.303 299.423 495.433 298.712 494.817C298.014 494.202 297.02 493.894 295.729 493.894C294.368 493.894 293.285 494.196 292.48 494.8C291.675 495.392 291.143 496.137 290.882 497.037L283.886 496.469C284.241 494.812 284.94 493.379 285.982 492.172C287.023 490.953 288.367 490.018 290.012 489.366C291.669 488.704 293.587 488.372 295.765 488.372C297.28 488.372 298.73 488.55 300.115 488.905C301.512 489.26 302.749 489.81 303.826 490.556C304.915 491.302 305.773 492.261 306.401 493.433C307.028 494.593 307.342 495.983 307.342 497.605V516H300.168V512.218H299.955C299.517 513.07 298.931 513.822 298.197 514.473C297.464 515.112 296.582 515.615 295.552 515.982C294.522 516.337 293.332 516.515 291.983 516.515ZM294.149 511.295C295.262 511.295 296.244 511.076 297.097 510.638C297.949 510.188 298.618 509.584 299.103 508.827C299.588 508.069 299.831 507.211 299.831 506.252V503.358C299.594 503.512 299.269 503.654 298.854 503.784C298.452 503.902 297.996 504.015 297.487 504.121C296.978 504.216 296.469 504.305 295.96 504.388C295.451 504.459 294.99 504.524 294.575 504.583C293.688 504.713 292.912 504.92 292.249 505.205C291.586 505.489 291.071 505.873 290.705 506.359C290.338 506.832 290.154 507.424 290.154 508.134C290.154 509.164 290.527 509.951 291.273 510.496C292.03 511.028 292.989 511.295 294.149 511.295ZM323.26 516.444C321.188 516.444 319.312 515.911 317.631 514.846C315.962 513.769 314.636 512.188 313.654 510.105C312.683 508.01 312.198 505.441 312.198 502.399C312.198 499.274 312.701 496.676 313.707 494.604C314.713 492.521 316.051 490.964 317.72 489.935C319.401 488.893 321.241 488.372 323.242 488.372C324.769 488.372 326.041 488.633 327.059 489.153C328.089 489.662 328.918 490.302 329.545 491.071C330.184 491.829 330.67 492.574 331.001 493.308H331.232V479.636H338.778V516H331.321V511.632H331.001C330.646 512.39 330.143 513.141 329.492 513.887C328.853 514.621 328.018 515.231 326.988 515.716C325.97 516.201 324.727 516.444 323.26 516.444ZM325.657 510.425C326.876 510.425 327.906 510.093 328.746 509.43C329.598 508.756 330.249 507.815 330.699 506.607C331.161 505.4 331.392 503.985 331.392 502.364C331.392 500.742 331.167 499.333 330.717 498.138C330.267 496.942 329.616 496.019 328.764 495.368C327.912 494.717 326.876 494.391 325.657 494.391C324.414 494.391 323.366 494.729 322.514 495.403C321.662 496.078 321.016 497.013 320.578 498.209C320.141 499.404 319.922 500.789 319.922 502.364C319.922 503.95 320.141 505.353 320.578 506.572C321.028 507.779 321.673 508.726 322.514 509.413C323.366 510.087 324.414 510.425 325.657 510.425ZM357.426 516.533C354.621 516.533 352.206 515.964 350.182 514.828C348.169 513.68 346.619 512.058 345.53 509.963C344.441 507.856 343.896 505.364 343.896 502.488C343.896 499.683 344.441 497.22 345.53 495.102C346.619 492.983 348.152 491.331 350.128 490.148C352.117 488.964 354.449 488.372 357.124 488.372C358.923 488.372 360.598 488.662 362.149 489.242C363.711 489.81 365.073 490.669 366.233 491.817C367.405 492.965 368.316 494.409 368.967 496.149C369.618 497.877 369.944 499.902 369.944 502.222V504.299H346.915V499.612H362.824C362.824 498.522 362.587 497.558 362.113 496.717C361.64 495.877 360.983 495.22 360.143 494.746C359.314 494.261 358.349 494.018 357.248 494.018C356.1 494.018 355.082 494.285 354.194 494.817C353.318 495.338 352.632 496.043 352.135 496.93C351.638 497.806 351.383 498.783 351.371 499.86V504.317C351.371 505.666 351.62 506.832 352.117 507.815C352.626 508.797 353.342 509.555 354.265 510.087C355.189 510.62 356.284 510.886 357.55 510.886C358.391 510.886 359.16 510.768 359.858 510.531C360.557 510.295 361.155 509.939 361.652 509.466C362.149 508.992 362.528 508.412 362.788 507.726L369.784 508.188C369.429 509.868 368.701 511.336 367.6 512.591C366.511 513.834 365.102 514.804 363.374 515.503C361.658 516.189 359.675 516.533 357.426 516.533ZM374.88 516V488.727H382.213V493.486H382.497C382.994 491.793 383.829 490.515 385.001 489.651C386.172 488.775 387.522 488.337 389.049 488.337C389.428 488.337 389.836 488.36 390.274 488.408C390.712 488.455 391.097 488.52 391.428 488.603V495.315C391.073 495.208 390.582 495.113 389.954 495.031C389.327 494.948 388.753 494.906 388.232 494.906C387.119 494.906 386.125 495.149 385.249 495.634C384.385 496.108 383.698 496.771 383.189 497.623C382.692 498.475 382.444 499.458 382.444 500.57V516H374.88Z" fill="white" />
                <path d="M229.017 390V208.182H251.034V289.148H347.98V208.182H369.997V390H347.98V308.679H251.034V390H229.017Z" fill="white" />
            </svg>


            <WorkerLine
                model={model}
            />
            {components}
        </>
    )
}