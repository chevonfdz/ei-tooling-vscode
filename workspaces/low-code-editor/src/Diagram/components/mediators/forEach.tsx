import React from "react";
import { Circle } from "@wso2-ei/low-code-diagram";
import { getComponent } from "../../util";
import { WorkerLine } from "../worker-line";

interface SquareProps {
    model: Circle;
}

export function ForEach(props: SquareProps) {
    const { model } = props;

    const viewState = model.viewState;
    const components: JSX.Element[] = [];

    model.children.forEach(child => {
        components.push(getComponent(child.type, { model: child }));
    })

    return (
        <>

            <svg x={viewState.bBox.x} y={viewState.bBox.y} width={viewState.bBox.w} height={viewState.bBox.h}  viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="800" height="600" fill="#C0C0C0" />
                <path d="M10 9H430V589H10V9Z" fill="#AD7B41" />
                <rect x="480" y="10" width="310" height="580" fill="#A9A9A9" />
                <path d="M468 299.5L439.5 335.44V263.56L468 299.5Z" fill="#71797E" />
                <path d="M145.528 529V499.909H164.79V504.98H151.679V511.912H163.511V516.983H151.679V529H145.528ZM177.07 529.426C174.863 529.426 172.955 528.957 171.345 528.02C169.745 527.073 168.509 525.757 167.638 524.071C166.767 522.376 166.331 520.411 166.331 518.176C166.331 515.922 166.767 513.953 167.638 512.267C168.509 510.572 169.745 509.256 171.345 508.318C172.955 507.371 174.863 506.898 177.07 506.898C179.276 506.898 181.179 507.371 182.78 508.318C184.39 509.256 185.63 510.572 186.501 512.267C187.373 513.953 187.808 515.922 187.808 518.176C187.808 520.411 187.373 522.376 186.501 524.071C185.63 525.757 184.39 527.073 182.78 528.02C181.179 528.957 179.276 529.426 177.07 529.426ZM177.098 524.739C178.102 524.739 178.94 524.455 179.612 523.886C180.285 523.309 180.791 522.523 181.132 521.528C181.482 520.534 181.658 519.402 181.658 518.134C181.658 516.865 181.482 515.733 181.132 514.739C180.791 513.744 180.285 512.958 179.612 512.381C178.94 511.803 178.102 511.514 177.098 511.514C176.085 511.514 175.232 511.803 174.541 512.381C173.859 512.958 173.343 513.744 172.993 514.739C172.652 515.733 172.482 516.865 172.482 518.134C172.482 519.402 172.652 520.534 172.993 521.528C173.343 522.523 173.859 523.309 174.541 523.886C175.232 524.455 176.085 524.739 177.098 524.739ZM191.743 529V507.182H197.609V510.989H197.837C198.234 509.634 198.902 508.612 199.839 507.92C200.777 507.22 201.857 506.869 203.078 506.869C203.381 506.869 203.708 506.888 204.058 506.926C204.409 506.964 204.716 507.016 204.982 507.082V512.452C204.697 512.366 204.304 512.291 203.803 512.224C203.301 512.158 202.841 512.125 202.425 512.125C201.535 512.125 200.739 512.319 200.038 512.707C199.347 513.086 198.798 513.616 198.391 514.298C197.993 514.98 197.794 515.766 197.794 516.656V529H191.743ZM208.224 529V499.909H227.826V504.98H214.374V511.912H226.817V516.983H214.374V523.929H227.883V529H208.224ZM238.824 529.412C237.432 529.412 236.191 529.17 235.102 528.688C234.013 528.195 233.152 527.471 232.517 526.514C231.892 525.548 231.58 524.346 231.58 522.906C231.58 521.694 231.802 520.676 232.247 519.852C232.692 519.028 233.298 518.366 234.065 517.864C234.832 517.362 235.704 516.983 236.679 516.727C237.664 516.472 238.696 516.292 239.776 516.188C241.045 516.055 242.067 515.932 242.844 515.818C243.62 515.695 244.184 515.515 244.534 515.278C244.884 515.042 245.06 514.691 245.06 514.227V514.142C245.06 513.242 244.776 512.546 244.207 512.054C243.649 511.562 242.853 511.315 241.821 511.315C240.732 511.315 239.866 511.557 239.222 512.04C238.578 512.513 238.152 513.11 237.943 513.83L232.347 513.375C232.631 512.049 233.189 510.903 234.023 509.938C234.856 508.962 235.931 508.214 237.247 507.693C238.573 507.163 240.107 506.898 241.849 506.898C243.062 506.898 244.222 507.04 245.33 507.324C246.447 507.608 247.437 508.048 248.298 508.645C249.17 509.241 249.856 510.009 250.358 510.946C250.86 511.874 251.111 512.987 251.111 514.284V529H245.372V525.974H245.202C244.851 526.656 244.383 527.258 243.795 527.778C243.208 528.29 242.503 528.692 241.679 528.986C240.855 529.27 239.903 529.412 238.824 529.412ZM240.557 525.236C241.447 525.236 242.233 525.061 242.915 524.71C243.597 524.35 244.132 523.867 244.52 523.261C244.908 522.655 245.102 521.969 245.102 521.202V518.886C244.913 519.009 244.652 519.123 244.321 519.227C243.999 519.322 243.634 519.412 243.227 519.497C242.82 519.573 242.413 519.644 242.006 519.71C241.598 519.767 241.229 519.819 240.898 519.866C240.188 519.971 239.567 520.136 239.037 520.364C238.507 520.591 238.095 520.899 237.801 521.287C237.508 521.666 237.361 522.139 237.361 522.707C237.361 523.531 237.659 524.161 238.256 524.597C238.862 525.023 239.629 525.236 240.557 525.236ZM265.663 529.426C263.429 529.426 261.506 528.953 259.896 528.006C258.296 527.049 257.065 525.723 256.203 524.028C255.351 522.333 254.925 520.383 254.925 518.176C254.925 515.941 255.356 513.981 256.217 512.295C257.089 510.6 258.324 509.279 259.925 508.332C261.525 507.376 263.429 506.898 265.635 506.898C267.538 506.898 269.205 507.243 270.635 507.935C272.065 508.626 273.196 509.597 274.03 510.847C274.863 512.097 275.322 513.564 275.408 515.25H269.697C269.536 514.161 269.11 513.285 268.419 512.622C267.737 511.95 266.842 511.614 265.734 511.614C264.797 511.614 263.978 511.869 263.277 512.381C262.586 512.883 262.046 513.616 261.658 514.582C261.269 515.548 261.075 516.718 261.075 518.091C261.075 519.483 261.265 520.667 261.643 521.642C262.032 522.617 262.576 523.361 263.277 523.872C263.978 524.384 264.797 524.639 265.734 524.639C266.426 524.639 267.046 524.497 267.595 524.213C268.154 523.929 268.613 523.517 268.973 522.977C269.342 522.428 269.584 521.77 269.697 521.003H275.408C275.313 522.67 274.858 524.137 274.044 525.406C273.239 526.666 272.126 527.651 270.706 528.361C269.286 529.071 267.605 529.426 265.663 529.426ZM285.333 516.386V529H279.282V499.909H285.163V511.031H285.418C285.911 509.743 286.706 508.735 287.805 508.006C288.903 507.267 290.281 506.898 291.938 506.898C293.453 506.898 294.774 507.229 295.901 507.892C297.038 508.545 297.918 509.488 298.543 510.719C299.178 511.94 299.49 513.403 299.481 515.108V529H293.43V516.188C293.439 514.843 293.098 513.796 292.407 513.048C291.725 512.3 290.769 511.926 289.538 511.926C288.714 511.926 287.985 512.101 287.35 512.452C286.725 512.802 286.233 513.313 285.873 513.986C285.522 514.649 285.343 515.449 285.333 516.386Z" fill="white" />
                <path d="M206.555 379H200.637V346.821L184.363 361.57L180.162 357.762L203.596 336.524L227.03 357.762L222.829 361.57L206.555 346.821V379Z" fill="white" />
                <rect width="134.179" height="134.179" transform="matrix(0.740976 -0.671532 0.740976 0.671532 104 246.106)" fill="white" />
                <rect width="111.816" height="111.816" transform="matrix(0.740976 -0.671532 0.740976 0.671532 120.404 245.955)" fill="#AD7B41" />
                <rect x="201.253" y="373.69" width="134.747" height="5.30952" fill="white" />
                <rect x="290.303" y="243.076" width="45.697" height="5.30952" fill="white" />
                <rect x="330.141" y="377.938" width="133.8" height="5.85859" transform="rotate(-90 330.141 377.938)" fill="white" />
            </svg>


            <WorkerLine
                model={model}
            />
            {components}
        </>
    )
}