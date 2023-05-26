import React from "react";
import { getComponent } from "../../util";
import { WorkerLine } from "../worker-line";
import { Circle, Square } from "@wso2-ei/low-code-diagram";

interface SquareProps {
    model: Square;
}

export function Throttle(props: SquareProps) {
    const { model } = props;

    const viewState = model.viewState;

    const components: JSX.Element[] = [];

    model.children.forEach(child => {
        components.push(getComponent(child.tag, { model: child }));
    })

    return (
        <>

            <svg x={viewState.bBox.x} y={viewState.bBox.y} width={viewState.bBox.w} height={viewState.bBox.h}  viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="800" height="600" fill="#C0C0C0" />
                <path d="M10 10H430V590H10V10Z" fill="#008234" />
                <rect x="474" y="10" width="310" height="280" fill="#A9A9A9" />
                <rect x="474" y="310" width="310" height="280" fill="#A9A9A9" />
                <path d="M468 449.5L439.5 485.44V413.56L468 449.5Z" fill="#71797E" />
                <path d="M468 150.5L439.5 186.44V114.56L468 150.5Z" fill="#71797E" />
                <path d="M135.42 481.98V476.909H159.312V481.98H150.406V506H144.327V481.98H135.42ZM169.185 493.386V506H163.134V476.909H169.014V488.031H169.27C169.762 486.743 170.558 485.735 171.656 485.006C172.755 484.267 174.133 483.898 175.79 483.898C177.305 483.898 178.626 484.229 179.753 484.892C180.889 485.545 181.77 486.488 182.395 487.719C183.029 488.94 183.342 490.403 183.332 492.108V506H177.281V493.188C177.291 491.843 176.95 490.796 176.259 490.048C175.577 489.3 174.62 488.926 173.389 488.926C172.565 488.926 171.836 489.101 171.202 489.452C170.577 489.802 170.084 490.313 169.724 490.986C169.374 491.649 169.194 492.449 169.185 493.386ZM188.094 506V484.182H193.961V487.989H194.188C194.586 486.634 195.254 485.612 196.191 484.92C197.129 484.22 198.208 483.869 199.43 483.869C199.733 483.869 200.059 483.888 200.41 483.926C200.76 483.964 201.068 484.016 201.333 484.082V489.452C201.049 489.366 200.656 489.291 200.154 489.224C199.652 489.158 199.193 489.125 198.776 489.125C197.886 489.125 197.091 489.319 196.39 489.707C195.699 490.086 195.149 490.616 194.742 491.298C194.344 491.98 194.146 492.766 194.146 493.656V506H188.094ZM213.304 506.426C211.098 506.426 209.189 505.957 207.58 505.02C205.979 504.073 204.743 502.757 203.872 501.071C203.001 499.376 202.565 497.411 202.565 495.176C202.565 492.922 203.001 490.953 203.872 489.267C204.743 487.572 205.979 486.256 207.58 485.318C209.189 484.371 211.098 483.898 213.304 483.898C215.51 483.898 217.414 484.371 219.014 485.318C220.624 486.256 221.865 487.572 222.736 489.267C223.607 490.953 224.043 492.922 224.043 495.176C224.043 497.411 223.607 499.376 222.736 501.071C221.865 502.757 220.624 504.073 219.014 505.02C217.414 505.957 215.51 506.426 213.304 506.426ZM213.332 501.739C214.336 501.739 215.174 501.455 215.847 500.886C216.519 500.309 217.026 499.523 217.366 498.528C217.717 497.534 217.892 496.402 217.892 495.134C217.892 493.865 217.717 492.733 217.366 491.739C217.026 490.744 216.519 489.958 215.847 489.381C215.174 488.803 214.336 488.514 213.332 488.514C212.319 488.514 211.467 488.803 210.776 489.381C210.094 489.958 209.578 490.744 209.227 491.739C208.886 492.733 208.716 493.865 208.716 495.134C208.716 496.402 208.886 497.534 209.227 498.528C209.578 499.523 210.094 500.309 210.776 500.886C211.467 501.455 212.319 501.739 213.332 501.739ZM239.582 484.182V488.727H226.443V484.182H239.582ZM229.426 478.955H235.477V499.295C235.477 499.854 235.563 500.29 235.733 500.602C235.903 500.905 236.14 501.118 236.443 501.241C236.756 501.365 237.116 501.426 237.523 501.426C237.807 501.426 238.091 501.402 238.375 501.355C238.659 501.298 238.877 501.256 239.028 501.227L239.98 505.73C239.677 505.825 239.251 505.934 238.702 506.057C238.152 506.189 237.485 506.27 236.699 506.298C235.241 506.355 233.962 506.161 232.864 505.716C231.775 505.271 230.927 504.58 230.321 503.642C229.715 502.705 229.417 501.521 229.426 500.091V478.955ZM255.129 484.182V488.727H241.99V484.182H255.129ZM244.973 478.955H251.024V499.295C251.024 499.854 251.109 500.29 251.28 500.602C251.45 500.905 251.687 501.118 251.99 501.241C252.303 501.365 252.662 501.426 253.07 501.426C253.354 501.426 253.638 501.402 253.922 501.355C254.206 501.298 254.424 501.256 254.575 501.227L255.527 505.73C255.224 505.825 254.798 505.934 254.249 506.057C253.699 506.189 253.032 506.27 252.246 506.298C250.787 506.355 249.509 506.161 248.411 505.716C247.321 505.271 246.474 504.58 245.868 503.642C245.262 502.705 244.964 501.521 244.973 500.091V478.955ZM265.591 476.909V506H259.54V476.909H265.591ZM280.381 506.426C278.137 506.426 276.205 505.972 274.586 505.062C272.976 504.144 271.736 502.847 270.864 501.17C269.993 499.485 269.558 497.491 269.558 495.19C269.558 492.946 269.993 490.976 270.864 489.281C271.736 487.586 272.962 486.265 274.543 485.318C276.134 484.371 278 483.898 280.14 483.898C281.579 483.898 282.919 484.13 284.16 484.594C285.41 485.048 286.499 485.735 287.427 486.653C288.364 487.572 289.094 488.727 289.614 490.119C290.135 491.502 290.396 493.121 290.396 494.977V496.639H271.972V492.889H284.7C284.7 492.018 284.51 491.246 284.131 490.574C283.753 489.902 283.227 489.376 282.555 488.997C281.892 488.609 281.12 488.415 280.239 488.415C279.321 488.415 278.506 488.628 277.796 489.054C277.095 489.471 276.546 490.034 276.148 490.744C275.751 491.445 275.547 492.226 275.538 493.088V496.653C275.538 497.733 275.737 498.666 276.134 499.452C276.541 500.238 277.114 500.844 277.853 501.27C278.592 501.696 279.468 501.909 280.481 501.909C281.153 501.909 281.769 501.814 282.327 501.625C282.886 501.436 283.364 501.152 283.762 500.773C284.16 500.394 284.463 499.93 284.671 499.381L290.268 499.75C289.984 501.095 289.401 502.269 288.521 503.273C287.649 504.267 286.522 505.044 285.14 505.602C283.767 506.152 282.181 506.426 280.381 506.426Z" fill="white" />
                <path d="M570.068 358.455C570.068 361.523 569.514 364.174 568.406 366.409C567.298 368.644 565.778 370.367 563.847 371.58C561.915 372.792 559.708 373.398 557.227 373.398C554.746 373.398 552.54 372.792 550.608 371.58C548.676 370.367 547.156 368.644 546.048 366.409C544.94 364.174 544.386 361.523 544.386 358.455C544.386 355.386 544.94 352.735 546.048 350.5C547.156 348.265 548.676 346.542 550.608 345.33C552.54 344.117 554.746 343.511 557.227 343.511C559.708 343.511 561.915 344.117 563.847 345.33C565.778 346.542 567.298 348.265 568.406 350.5C569.514 352.735 570.068 355.386 570.068 358.455ZM566.659 358.455C566.659 355.936 566.238 353.81 565.395 352.077C564.562 350.344 563.43 349.032 562 348.142C560.58 347.252 558.989 346.807 557.227 346.807C555.466 346.807 553.87 347.252 552.44 348.142C551.02 349.032 549.888 350.344 549.045 352.077C548.212 353.81 547.795 355.936 547.795 358.455C547.795 360.973 548.212 363.099 549.045 364.832C549.888 366.565 551.02 367.877 552.44 368.767C553.87 369.657 555.466 370.102 557.227 370.102C558.989 370.102 560.58 369.657 562 368.767C563.43 367.877 564.562 366.565 565.395 364.832C566.238 363.099 566.659 360.973 566.659 358.455ZM578.889 359.875V373H575.537V351.182H578.776V354.591H579.06C579.571 353.483 580.348 352.593 581.389 351.92C582.431 351.239 583.776 350.898 585.423 350.898C586.901 350.898 588.193 351.201 589.301 351.807C590.409 352.403 591.271 353.312 591.886 354.534C592.502 355.746 592.81 357.28 592.81 359.136V373H589.457V359.364C589.457 357.65 589.012 356.314 588.122 355.358C587.232 354.392 586.01 353.909 584.457 353.909C583.387 353.909 582.431 354.141 581.588 354.605C580.755 355.069 580.097 355.746 579.614 356.636C579.131 357.527 578.889 358.606 578.889 359.875ZM599.39 373V343.909H609.219C611.492 343.909 613.358 344.297 614.816 345.074C616.274 345.841 617.354 346.897 618.055 348.241C618.755 349.586 619.106 351.116 619.106 352.83C619.106 354.544 618.755 356.063 618.055 357.389C617.354 358.715 616.279 359.757 614.83 360.514C613.381 361.262 611.53 361.636 609.276 361.636H601.322V358.455H609.163C610.716 358.455 611.966 358.227 612.913 357.773C613.869 357.318 614.56 356.674 614.987 355.841C615.422 354.998 615.64 353.994 615.64 352.83C615.64 351.665 615.422 350.647 614.987 349.776C614.551 348.904 613.855 348.232 612.898 347.759C611.942 347.276 610.678 347.034 609.106 347.034H602.913V373H599.39ZM613.083 359.932L620.242 373H616.151L609.106 359.932H613.083ZM633.435 373.455C631.332 373.455 629.519 372.991 627.994 372.062C626.479 371.125 625.31 369.818 624.486 368.142C623.671 366.456 623.264 364.496 623.264 362.261C623.264 360.027 623.671 358.057 624.486 356.352C625.31 354.638 626.455 353.303 627.923 352.347C629.401 351.381 631.124 350.898 633.094 350.898C634.23 350.898 635.352 351.087 636.46 351.466C637.568 351.845 638.577 352.46 639.486 353.312C640.395 354.155 641.119 355.273 641.659 356.665C642.199 358.057 642.469 359.771 642.469 361.807V363.227H625.651V360.33H639.06C639.06 359.098 638.813 358 638.321 357.034C637.838 356.068 637.147 355.306 636.247 354.747C635.357 354.188 634.306 353.909 633.094 353.909C631.759 353.909 630.603 354.241 629.628 354.903C628.662 355.557 627.919 356.409 627.398 357.46C626.877 358.511 626.616 359.638 626.616 360.841V362.773C626.616 364.42 626.901 365.817 627.469 366.963C628.046 368.099 628.847 368.966 629.869 369.562C630.892 370.15 632.08 370.443 633.435 370.443C634.315 370.443 635.111 370.32 635.821 370.074C636.541 369.818 637.161 369.439 637.682 368.938C638.203 368.426 638.605 367.792 638.889 367.034L642.128 367.943C641.787 369.042 641.214 370.008 640.409 370.841C639.604 371.665 638.61 372.309 637.426 372.773C636.242 373.227 634.912 373.455 633.435 373.455ZM647.568 351.182H650.92V374.591C650.92 375.936 650.688 377.1 650.224 378.085C649.77 379.07 649.079 379.832 648.151 380.372C647.232 380.912 646.072 381.182 644.67 381.182C644.557 381.182 644.443 381.182 644.33 381.182C644.216 381.182 644.102 381.182 643.989 381.182V378.057C644.102 378.057 644.206 378.057 644.301 378.057C644.396 378.057 644.5 378.057 644.614 378.057C645.636 378.057 646.384 377.754 646.858 377.148C647.331 376.551 647.568 375.699 647.568 374.591V351.182ZM649.216 347.545C648.563 347.545 647.999 347.323 647.526 346.878C647.062 346.433 646.83 345.898 646.83 345.273C646.83 344.648 647.062 344.113 647.526 343.668C647.999 343.223 648.563 343 649.216 343C649.869 343 650.428 343.223 650.892 343.668C651.366 344.113 651.602 344.648 651.602 345.273C651.602 345.898 651.366 346.433 650.892 346.878C650.428 347.323 649.869 347.545 649.216 347.545ZM666.208 373.455C664.106 373.455 662.292 372.991 660.768 372.062C659.253 371.125 658.083 369.818 657.259 368.142C656.445 366.456 656.038 364.496 656.038 362.261C656.038 360.027 656.445 358.057 657.259 356.352C658.083 354.638 659.229 353.303 660.697 352.347C662.174 351.381 663.897 350.898 665.867 350.898C667.004 350.898 668.126 351.087 669.234 351.466C670.342 351.845 671.35 352.46 672.259 353.312C673.168 354.155 673.893 355.273 674.433 356.665C674.972 358.057 675.242 359.771 675.242 361.807V363.227H658.424V360.33H671.833C671.833 359.098 671.587 358 671.094 357.034C670.612 356.068 669.92 355.306 669.021 354.747C668.13 354.188 667.079 353.909 665.867 353.909C664.532 353.909 663.377 354.241 662.401 354.903C661.435 355.557 660.692 356.409 660.171 357.46C659.65 358.511 659.39 359.638 659.39 360.841V362.773C659.39 364.42 659.674 365.817 660.242 366.963C660.82 368.099 661.62 368.966 662.643 369.562C663.665 370.15 664.854 370.443 666.208 370.443C667.089 370.443 667.884 370.32 668.594 370.074C669.314 369.818 669.934 369.439 670.455 368.938C670.976 368.426 671.379 367.792 671.663 367.034L674.901 367.943C674.56 369.042 673.987 370.008 673.183 370.841C672.378 371.665 671.383 372.309 670.2 372.773C669.016 373.227 667.685 373.455 666.208 373.455ZM689.205 373.455C687.16 373.455 685.398 372.972 683.921 372.006C682.444 371.04 681.308 369.709 680.512 368.014C679.717 366.319 679.319 364.383 679.319 362.205C679.319 359.989 679.726 358.033 680.54 356.338C681.364 354.634 682.51 353.303 683.978 352.347C685.455 351.381 687.179 350.898 689.148 350.898C690.683 350.898 692.065 351.182 693.296 351.75C694.527 352.318 695.536 353.114 696.322 354.136C697.108 355.159 697.595 356.352 697.785 357.716H694.433C694.177 356.722 693.609 355.841 692.728 355.074C691.857 354.297 690.683 353.909 689.205 353.909C687.898 353.909 686.753 354.25 685.768 354.932C684.792 355.604 684.03 356.556 683.481 357.787C682.941 359.009 682.671 360.443 682.671 362.091C682.671 363.777 682.936 365.244 683.467 366.494C684.006 367.744 684.764 368.715 685.739 369.406C686.724 370.098 687.879 370.443 689.205 370.443C690.076 370.443 690.867 370.292 691.577 369.989C692.288 369.686 692.889 369.25 693.381 368.682C693.874 368.114 694.224 367.432 694.433 366.636H697.785C697.595 367.924 697.127 369.084 696.379 370.116C695.64 371.139 694.66 371.954 693.438 372.56C692.226 373.156 690.815 373.455 689.205 373.455ZM712.174 351.182V354.023H700.867V351.182H712.174ZM704.163 345.955H707.515V366.75C707.515 367.697 707.652 368.407 707.927 368.881C708.211 369.345 708.571 369.657 709.006 369.818C709.451 369.97 709.92 370.045 710.413 370.045C710.782 370.045 711.085 370.027 711.322 369.989C711.558 369.941 711.748 369.903 711.89 369.875L712.572 372.886C712.344 372.972 712.027 373.057 711.62 373.142C711.213 373.237 710.697 373.284 710.072 373.284C709.125 373.284 708.197 373.08 707.288 372.673C706.388 372.266 705.64 371.646 705.043 370.812C704.456 369.979 704.163 368.928 704.163 367.659V345.955Z" fill="black" />
                <path d="M563.068 54.4545C563.068 57.5227 562.514 60.1742 561.406 62.4091C560.298 64.6439 558.778 66.3674 556.847 67.5795C554.915 68.7917 552.708 69.3977 550.227 69.3977C547.746 69.3977 545.54 68.7917 543.608 67.5795C541.676 66.3674 540.156 64.6439 539.048 62.4091C537.94 60.1742 537.386 57.5227 537.386 54.4545C537.386 51.3864 537.94 48.7348 539.048 46.5C540.156 44.2652 541.676 42.5417 543.608 41.3295C545.54 40.1174 547.746 39.5114 550.227 39.5114C552.708 39.5114 554.915 40.1174 556.847 41.3295C558.778 42.5417 560.298 44.2652 561.406 46.5C562.514 48.7348 563.068 51.3864 563.068 54.4545ZM559.659 54.4545C559.659 51.9356 559.238 49.8097 558.395 48.0767C557.562 46.3438 556.43 45.0322 555 44.142C553.58 43.2519 551.989 42.8068 550.227 42.8068C548.466 42.8068 546.87 43.2519 545.44 44.142C544.02 45.0322 542.888 46.3438 542.045 48.0767C541.212 49.8097 540.795 51.9356 540.795 54.4545C540.795 56.9735 541.212 59.0994 542.045 60.8324C542.888 62.5653 544.02 63.8769 545.44 64.767C546.87 65.6572 548.466 66.1023 550.227 66.1023C551.989 66.1023 553.58 65.6572 555 64.767C556.43 63.8769 557.562 62.5653 558.395 60.8324C559.238 59.0994 559.659 56.9735 559.659 54.4545ZM571.889 55.875V69H568.537V47.1818H571.776V50.5909H572.06C572.571 49.483 573.348 48.5928 574.389 47.9205C575.431 47.2386 576.776 46.8977 578.423 46.8977C579.901 46.8977 581.193 47.2008 582.301 47.8068C583.409 48.4034 584.271 49.3125 584.886 50.5341C585.502 51.7462 585.81 53.2803 585.81 55.1364V69H582.457V55.3636C582.457 53.6496 582.012 52.3144 581.122 51.358C580.232 50.392 579.01 49.9091 577.457 49.9091C576.387 49.9091 575.431 50.1411 574.588 50.6051C573.755 51.0691 573.097 51.7462 572.614 52.6364C572.131 53.5265 571.889 54.6061 571.889 55.875ZM593.583 69H589.89L600.572 39.9091H604.208L614.89 69H611.197L602.504 44.5114H602.276L593.583 69ZM594.947 57.6364H609.833V60.7614H594.947V57.6364ZM627.83 69.4545C625.785 69.4545 624.023 68.9716 622.546 68.0057C621.069 67.0398 619.933 65.7093 619.137 64.0142C618.342 62.3191 617.944 60.3826 617.944 58.2045C617.944 55.9886 618.351 54.0331 619.165 52.3381C619.989 50.6335 621.135 49.303 622.603 48.3466C624.08 47.3807 625.804 46.8977 627.773 46.8977C629.308 46.8977 630.69 47.1818 631.921 47.75C633.152 48.3182 634.161 49.1136 634.947 50.1364C635.733 51.1591 636.22 52.3523 636.41 53.7159H633.058C632.802 52.7216 632.234 51.8409 631.353 51.0739C630.482 50.2973 629.308 49.9091 627.83 49.9091C626.523 49.9091 625.378 50.25 624.393 50.9318C623.417 51.6042 622.655 52.5559 622.106 53.7869C621.566 55.0085 621.296 56.4432 621.296 58.0909C621.296 59.7765 621.561 61.2443 622.092 62.4943C622.631 63.7443 623.389 64.715 624.364 65.4062C625.349 66.0975 626.504 66.4432 627.83 66.4432C628.701 66.4432 629.492 66.2917 630.202 65.9886C630.913 65.6856 631.514 65.25 632.006 64.6818C632.499 64.1136 632.849 63.4318 633.058 62.6364H636.41C636.22 63.9242 635.752 65.0843 635.004 66.1165C634.265 67.1392 633.285 67.9536 632.063 68.5597C630.851 69.1562 629.44 69.4545 627.83 69.4545ZM650.174 69.4545C648.129 69.4545 646.367 68.9716 644.89 68.0057C643.413 67.0398 642.276 65.7093 641.481 64.0142C640.685 62.3191 640.288 60.3826 640.288 58.2045C640.288 55.9886 640.695 54.0331 641.509 52.3381C642.333 50.6335 643.479 49.303 644.947 48.3466C646.424 47.3807 648.147 46.8977 650.117 46.8977C651.651 46.8977 653.034 47.1818 654.265 47.75C655.496 48.3182 656.504 49.1136 657.29 50.1364C658.076 51.1591 658.564 52.3523 658.754 53.7159H655.401C655.146 52.7216 654.577 51.8409 653.697 51.0739C652.826 50.2973 651.651 49.9091 650.174 49.9091C648.867 49.9091 647.721 50.25 646.737 50.9318C645.761 51.6042 644.999 52.5559 644.45 53.7869C643.91 55.0085 643.64 56.4432 643.64 58.0909C643.64 59.7765 643.905 61.2443 644.435 62.4943C644.975 63.7443 645.733 64.715 646.708 65.4062C647.693 66.0975 648.848 66.4432 650.174 66.4432C651.045 66.4432 651.836 66.2917 652.546 65.9886C653.256 65.6856 653.858 65.25 654.35 64.6818C654.843 64.1136 655.193 63.4318 655.401 62.6364H658.754C658.564 63.9242 658.095 65.0843 657.347 66.1165C656.609 67.1392 655.629 67.9536 654.407 68.5597C653.195 69.1562 651.784 69.4545 650.174 69.4545ZM672.802 69.4545C670.7 69.4545 668.886 68.9905 667.362 68.0625C665.846 67.125 664.677 65.8182 663.853 64.142C663.039 62.4564 662.631 60.4962 662.631 58.2614C662.631 56.0265 663.039 54.0568 663.853 52.3523C664.677 50.6383 665.823 49.303 667.29 48.3466C668.768 47.3807 670.491 46.8977 672.461 46.8977C673.597 46.8977 674.719 47.0871 675.827 47.4659C676.935 47.8447 677.944 48.4602 678.853 49.3125C679.762 50.1553 680.487 51.2727 681.026 52.6648C681.566 54.0568 681.836 55.7708 681.836 57.8068V59.2273H665.018V56.3295H678.427C678.427 55.0985 678.181 54 677.688 53.0341C677.205 52.0682 676.514 51.3059 675.614 50.7472C674.724 50.1884 673.673 49.9091 672.461 49.9091C671.126 49.9091 669.97 50.2405 668.995 50.9034C668.029 51.5568 667.286 52.4091 666.765 53.4602C666.244 54.5114 665.984 55.6383 665.984 56.8409V58.7727C665.984 60.4205 666.268 61.8172 666.836 62.9631C667.414 64.0994 668.214 64.9659 669.237 65.5625C670.259 66.1496 671.448 66.4432 672.802 66.4432C673.683 66.4432 674.478 66.3201 675.188 66.0739C675.908 65.8182 676.528 65.4394 677.049 64.9375C677.57 64.4261 677.972 63.7917 678.256 63.0341L681.495 63.9432C681.154 65.0417 680.581 66.0076 679.776 66.8409C678.971 67.6648 677.977 68.3087 676.793 68.7727C675.61 69.2273 674.279 69.4545 672.802 69.4545ZM686.935 77.1818V47.1818H690.174V50.6477H690.572C690.818 50.2689 691.159 49.786 691.594 49.1989C692.04 48.6023 692.674 48.072 693.498 47.608C694.331 47.1345 695.458 46.8977 696.879 46.8977C698.716 46.8977 700.335 47.357 701.737 48.2756C703.138 49.1941 704.232 50.4962 705.018 52.1818C705.804 53.8674 706.197 55.8561 706.197 58.1477C706.197 60.4583 705.804 62.4612 705.018 64.1562C704.232 65.8419 703.143 67.1487 701.751 68.0767C700.359 68.9953 698.754 69.4545 696.935 69.4545C695.534 69.4545 694.412 69.2225 693.569 68.7585C692.726 68.285 692.077 67.75 691.623 67.1534C691.168 66.5473 690.818 66.0455 690.572 65.6477H690.288V77.1818H686.935ZM690.231 58.0909C690.231 59.7386 690.472 61.1922 690.955 62.4517C691.438 63.7017 692.144 64.6818 693.072 65.392C694 66.0928 695.136 66.4432 696.481 66.4432C697.882 66.4432 699.052 66.0739 699.989 65.3352C700.936 64.5871 701.647 63.5833 702.12 62.3239C702.603 61.0549 702.844 59.6439 702.844 58.0909C702.844 56.5568 702.608 55.1742 702.134 53.9432C701.67 52.7027 700.965 51.7225 700.018 51.0028C699.08 50.2737 697.901 49.9091 696.481 49.9091C695.117 49.9091 693.971 50.2547 693.043 50.946C692.115 51.6278 691.415 52.5843 690.941 53.8153C690.468 55.0369 690.231 56.4621 690.231 58.0909ZM720.799 47.1818V50.0227H709.492V47.1818H720.799ZM712.788 41.9545H716.14V62.75C716.14 63.697 716.277 64.4072 716.552 64.8807C716.836 65.3447 717.196 65.6572 717.631 65.8182C718.076 65.9697 718.545 66.0455 719.038 66.0455C719.407 66.0455 719.71 66.0265 719.947 65.9886C720.183 65.9413 720.373 65.9034 720.515 65.875L721.197 68.8864C720.969 68.9716 720.652 69.0568 720.245 69.142C719.838 69.2367 719.322 69.2841 718.697 69.2841C717.75 69.2841 716.822 69.0805 715.913 68.6733C715.013 68.2661 714.265 67.6458 713.668 66.8125C713.081 65.9792 712.788 64.928 712.788 63.6591V41.9545Z" fill="black" />
                <path d="M220 280C212.044 280 204.413 276.839 198.787 271.213C193.161 265.587 190 257.956 190 250C190 238.8 196.1 229 205 223.9L302.1 167.7L246.8 263.5C241.8 273.3 231.7 280 220 280ZM220 150C238.1 150 255 155 269.7 163.2L248.7 175.3C240 171.9 230 170 220 170C198.783 170 178.434 178.429 163.431 193.431C148.429 208.434 140 228.783 140 250C140 272.1 148.9 292.1 163.4 306.5H163.5C167.4 310.4 167.4 316.7 163.5 320.6C159.6 324.5 153.2 324.5 149.3 320.7C131.2 302.6 120 277.6 120 250C120 223.478 130.536 198.043 149.289 179.289C168.043 160.536 193.478 150 220 150ZM320 250C320 277.6 308.8 302.6 290.7 320.7C286.8 324.5 280.5 324.5 276.6 320.6C272.7 316.7 272.7 310.4 276.6 306.5C291.1 292 300 272.1 300 250C300 240 298.1 230 294.6 221L306.7 200C315 215 320 231.8 320 250Z" fill="white" />
                <rect x="62" y="287" width="302" height="73" fill="#008234" />
                <rect x="111" y="298" width="218" height="20" fill="white" />
            </svg>


            <WorkerLine
                model={model}
            />
            {components}
            {/*<NameComponent model={model} />*/}
        </>
    )
}                                                                                                                                      