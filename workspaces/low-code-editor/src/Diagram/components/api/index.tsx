import React from "react";
import { getComponent } from "../../util";
import { WorkerLine } from "../worker-line";
import { Circle, Square } from "@wso2-ei/low-code-diagram";

interface SquareProps {
    model: Square;
}

export function Api(props: SquareProps) {
    const { model } = props;

    const viewState = model.viewState;

    const components: JSX.Element[] = [];

    model.children.forEach(child => {
        components.push(getComponent(child.tag, { model: child }));
    })

    return (
        <>

            <svg>
                <rect
                    x={viewState.bBox.x}
                    y={viewState.bBox.y}
                    width={viewState.bBox.w}
                    height={viewState.bBox.h}
                    fill='#0000FF'
                    stroke="black"
                    stroke-width="3"
                />
            </svg>

            <WorkerLine
                model={model}
            />
            {components}
            {/*<NameComponent model={model} />*/}
        </>
    )
}