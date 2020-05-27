import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import { Paper } from "@material-ui/core";
import gridData from "./grid";

const ReactGridLayout = WidthProvider(RGL);

export default function ConfigurationContent() {
  return (
    <Paper className="layout-content">
      <ReactGridLayout
        className="layout"
        cols={12}
        rowHeight={30}
        width={1200}
        isDraggable={false}
      >
        {gridData[0].layout.map((layout: any, index: number) => {
          return (
            <div key={index} data-grid={{ static: true, ...layout }}></div>
          );
        })}
        {/* <div key="a" data-grid={{ x: 0, y: 0, w: 6, h: 2, static: true }}></div>
        <div key="b" data-grid={{ x: 6, y: 2, w: 6, h: 2, static: true }}></div>
        <div key="c" data-grid={{ x: 1, y: 0, w: 3, h: 2, static: true }}></div>
        <div key="d" data-grid={{ x: 4, y: 0, w: 1, h: 2, static: true }}></div> */}
      </ReactGridLayout>
    </Paper>
  );
}
