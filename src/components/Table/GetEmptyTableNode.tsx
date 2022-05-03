import {
    ELEMENT_DEFAULT,
    getPluginType,
    PlateEditor,
  } from '@udecode/plate-core';
import { getEmptyCellNode } from "./getEmptyCellNode"
import { getEmptyRowNode } from "./getEmptyRowNode";
import { ELEMENT_TABLE } from "@udecode/plate";



export const getEmptyTableNode = (
    editor: PlateEditor,
    Count: number,
    row: number,
) => {
    if(row == 1) {
        return {  
            type:getPluginType(editor, ELEMENT_TABLE),
            children: [
                getEmptyRowNode(editor, {colCount: Count}),
            ]
        }
    }
    if(row == 2) {
        return {  
            type:getPluginType(editor, ELEMENT_TABLE),
            children: [
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
            ]
        }
    }
    if(row == 3) {
        return {  
            type:getPluginType(editor, ELEMENT_TABLE),
            children: [
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
            ]
        }
    }
    if(row == 4) {
        return {  
            type:getPluginType(editor, ELEMENT_TABLE),
            children: [
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
            ]
        }
    }
    if(row == 5) {
        return {  
            type:getPluginType(editor, ELEMENT_TABLE),
            children: [
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
            ]
        }
    }
    if(row == 6) {
        return {  
            type:getPluginType(editor, ELEMENT_TABLE),
            children: [
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
            ]
        }
    }
    if(row == 7) {
        return {  
            type:getPluginType(editor, ELEMENT_TABLE),
            children: [
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
            ]
        }
    }
    if(row == 8) {
        return {  
            type:getPluginType(editor, ELEMENT_TABLE),
            children: [
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
            ]
        }
    }
    if(row == 9) {
        return {  
            type:getPluginType(editor, ELEMENT_TABLE),
            children: [
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
            ]
        }
    }
    else {
        return {  
            type:getPluginType(editor, ELEMENT_TABLE),
            children: [
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
                getEmptyRowNode(editor, {colCount: Count}),
            ]
        }
    }    
}