import React from "react";
import { Circle } from "@wso2-ei/low-code-diagram";
import { getComponent } from "../../util";
import { WorkerLine } from "../worker-line";

interface SquareProps {
    model: Circle;
}

export function UrlRewrite(props: SquareProps) {
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
                <path d="M209.497 490.909H215.648V509.801C215.648 511.922 215.141 513.778 214.128 515.369C213.124 516.96 211.718 518.201 209.909 519.091C208.1 519.972 205.993 520.412 203.588 520.412C201.173 520.412 199.062 519.972 197.253 519.091C195.444 518.201 194.038 516.96 193.034 515.369C192.03 513.778 191.528 511.922 191.528 509.801V490.909H197.679V509.276C197.679 510.384 197.92 511.368 198.403 512.23C198.896 513.092 199.587 513.769 200.477 514.261C201.367 514.754 202.404 515 203.588 515C204.781 515 205.818 514.754 206.699 514.261C207.589 513.769 208.276 513.092 208.759 512.23C209.251 511.368 209.497 510.384 209.497 509.276V490.909ZM220.708 520V490.909H232.185C234.382 490.909 236.257 491.302 237.81 492.088C239.373 492.865 240.561 493.968 241.376 495.398C242.2 496.818 242.612 498.49 242.612 500.412C242.612 502.344 242.195 504.006 241.362 505.398C240.528 506.78 239.321 507.841 237.739 508.58C236.167 509.318 234.264 509.688 232.029 509.688H224.344V504.744H231.035C232.209 504.744 233.184 504.583 233.961 504.261C234.737 503.939 235.315 503.456 235.694 502.812C236.082 502.169 236.276 501.368 236.276 500.412C236.276 499.446 236.082 498.632 235.694 497.969C235.315 497.306 234.733 496.804 233.947 496.463C233.17 496.113 232.19 495.938 231.006 495.938H226.859V520H220.708ZM236.418 506.761L243.648 520H236.859L229.785 506.761H236.418ZM246.958 520V490.909H253.109V514.929H265.58V520H246.958ZM278.911 520V490.909H290.388C292.585 490.909 294.46 491.302 296.013 492.088C297.576 492.865 298.764 493.968 299.579 495.398C300.403 496.818 300.815 498.49 300.815 500.412C300.815 502.344 300.398 504.006 299.565 505.398C298.731 506.78 297.524 507.841 295.942 508.58C294.371 509.318 292.467 509.688 290.232 509.688H282.548V504.744H289.238C290.412 504.744 291.388 504.583 292.164 504.261C292.941 503.939 293.518 503.456 293.897 502.812C294.285 502.169 294.479 501.368 294.479 500.412C294.479 499.446 294.285 498.632 293.897 497.969C293.518 497.306 292.936 496.804 292.15 496.463C291.373 496.113 290.393 495.938 289.21 495.938H285.062V520H278.911ZM294.621 506.761L301.852 520H295.062L287.988 506.761H294.621ZM314.639 520.426C312.395 520.426 310.463 519.972 308.844 519.062C307.234 518.144 305.993 516.847 305.122 515.17C304.251 513.485 303.815 511.491 303.815 509.19C303.815 506.946 304.251 504.976 305.122 503.281C305.993 501.586 307.22 500.265 308.801 499.318C310.392 498.371 312.258 497.898 314.398 497.898C315.837 497.898 317.177 498.13 318.418 498.594C319.668 499.048 320.757 499.735 321.685 500.653C322.622 501.572 323.351 502.727 323.872 504.119C324.393 505.502 324.653 507.121 324.653 508.977V510.639H306.23V506.889H318.957C318.957 506.018 318.768 505.246 318.389 504.574C318.01 503.902 317.485 503.376 316.812 502.997C316.15 502.609 315.378 502.415 314.497 502.415C313.579 502.415 312.764 502.628 312.054 503.054C311.353 503.471 310.804 504.034 310.406 504.744C310.009 505.445 309.805 506.226 309.795 507.088V510.653C309.795 511.733 309.994 512.666 310.392 513.452C310.799 514.238 311.372 514.844 312.111 515.27C312.849 515.696 313.725 515.909 314.739 515.909C315.411 515.909 316.027 515.814 316.585 515.625C317.144 515.436 317.622 515.152 318.02 514.773C318.418 514.394 318.721 513.93 318.929 513.381L324.526 513.75C324.241 515.095 323.659 516.269 322.778 517.273C321.907 518.267 320.78 519.044 319.398 519.602C318.025 520.152 316.438 520.426 314.639 520.426ZM332.75 520L326.812 498.182H332.935L336.315 512.841H336.514L340.037 498.182H346.045L349.625 512.756H349.81L353.134 498.182H359.241L353.318 520H346.912L343.162 506.278H342.892L339.142 520H332.75ZM362.469 520V498.182H368.521V520H362.469ZM365.509 495.369C364.61 495.369 363.838 495.071 363.194 494.474C362.559 493.868 362.242 493.144 362.242 492.301C362.242 491.468 362.559 490.753 363.194 490.156C363.838 489.55 364.61 489.247 365.509 489.247C366.409 489.247 367.176 489.55 367.81 490.156C368.454 490.753 368.776 491.468 368.776 492.301C368.776 493.144 368.454 493.868 367.81 494.474C367.176 495.071 366.409 495.369 365.509 495.369ZM384.973 498.182V502.727H371.834V498.182H384.973ZM374.817 492.955H380.868V513.295C380.868 513.854 380.953 514.29 381.124 514.602C381.294 514.905 381.531 515.118 381.834 515.241C382.146 515.365 382.506 515.426 382.913 515.426C383.197 515.426 383.482 515.402 383.766 515.355C384.05 515.298 384.268 515.256 384.419 515.227L385.371 519.73C385.068 519.825 384.642 519.934 384.092 520.057C383.543 520.189 382.875 520.27 382.089 520.298C380.631 520.355 379.353 520.161 378.254 519.716C377.165 519.271 376.318 518.58 375.712 517.642C375.106 516.705 374.807 515.521 374.817 514.091V492.955ZM398.624 520.426C396.379 520.426 394.447 519.972 392.828 519.062C391.218 518.144 389.978 516.847 389.107 515.17C388.235 513.485 387.8 511.491 387.8 509.19C387.8 506.946 388.235 504.976 389.107 503.281C389.978 501.586 391.204 500.265 392.786 499.318C394.376 498.371 396.242 497.898 398.382 497.898C399.821 497.898 401.161 498.13 402.402 498.594C403.652 499.048 404.741 499.735 405.669 500.653C406.607 501.572 407.336 502.727 407.857 504.119C408.377 505.502 408.638 507.121 408.638 508.977V510.639H390.214V506.889H402.942C402.942 506.018 402.752 505.246 402.374 504.574C401.995 503.902 401.469 503.376 400.797 502.997C400.134 502.609 399.362 502.415 398.482 502.415C397.563 502.415 396.749 502.628 396.038 503.054C395.338 503.471 394.788 504.034 394.391 504.744C393.993 505.445 393.789 506.226 393.78 507.088V510.653C393.78 511.733 393.979 512.666 394.376 513.452C394.784 514.238 395.357 514.844 396.095 515.27C396.834 515.696 397.71 515.909 398.723 515.909C399.395 515.909 400.011 515.814 400.57 515.625C401.128 515.436 401.607 515.152 402.004 514.773C402.402 514.394 402.705 513.93 402.913 513.381L408.51 513.75C408.226 515.095 407.643 516.269 406.763 517.273C405.892 518.267 404.765 519.044 403.382 519.602C402.009 520.152 400.423 520.426 398.624 520.426Z" fill="white" />
                <rect x="150" y="159" width="299" height="254" rx="17" fill="#644A9B" stroke="white" stroke-width="6" />
                <path d="M243.215 234.023C243.309 236.881 240.317 239.167 236.578 239.095C232.933 239.095 229.942 236.809 229.942 234.023C229.942 220.094 244.757 208.771 262.985 208.771L296.076 208.771C314.304 208.771 329.12 220.094 329.12 234.023C329.12 247.953 314.304 259.275 296.076 259.275H282.148C286.027 256.382 289.252 252.989 291.589 249.203L296.029 249.168C307.013 249.203 315.893 242.417 315.846 234.023C315.893 225.63 307.013 218.844 296.029 218.879L263.032 218.879C252.049 218.844 243.168 225.63 243.215 234.023ZM276.212 228.952C279.858 228.952 282.849 231.237 282.849 234.023C282.849 247.953 268.033 259.275 249.805 259.275L216.715 259.275C198.487 259.275 183.671 247.953 183.671 234.023C183.671 220.094 198.487 208.771 216.715 208.771L230.643 208.771C226.763 211.664 223.538 215.058 221.155 218.879H216.761C205.778 218.844 196.898 225.63 196.944 234.023C196.898 242.417 205.778 249.203 216.761 249.168L249.758 249.168C260.742 249.203 269.622 242.417 269.575 234.023C269.482 231.166 272.473 228.88 276.212 228.952Z" fill="white" />
                <path d="M329.557 337.977C329.65 340.834 326.659 343.12 322.92 343.048C319.274 343.048 316.283 340.763 316.283 337.977C316.283 324.047 331.099 312.725 349.327 312.725L382.417 312.725C400.645 312.725 415.461 324.047 415.461 337.977C415.461 351.906 400.645 363.229 382.417 363.229H368.489C372.369 360.336 375.594 356.942 377.93 353.156L382.371 353.121C393.354 353.156 402.234 346.37 402.188 337.977C402.234 329.583 393.354 322.797 382.371 322.833L349.374 322.833C338.39 322.797 329.51 329.583 329.557 337.977ZM362.554 332.905C366.199 332.905 369.19 335.191 369.19 337.977C369.19 351.906 354.375 363.229 336.147 363.229L303.056 363.229C284.828 363.229 270.012 351.906 270.012 337.977C270.012 324.047 284.828 312.725 303.056 312.725L316.984 312.725C313.105 315.618 309.88 319.011 307.496 322.833H303.103C292.119 322.797 283.239 329.583 283.286 337.977C283.239 346.37 292.119 353.156 303.103 353.121L336.1 353.121C347.083 353.156 355.964 346.37 355.917 337.977C355.823 335.119 358.815 332.833 362.554 332.905Z" fill="white" />
                <path d="M288.923 271.353L293.025 268.218L323.832 291.761V277.111H329.65V299.342H300.56V294.896H319.73L288.923 271.353Z" fill="white" />
            </svg>


            <WorkerLine
                model={model}
            />
            {components}
        </>
    )
}