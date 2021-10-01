
import { TablePluginOptions
} from '@udecode/plate';
import LimValue from "./LimValue";


export const getBottomLimSymbolCellNode = (
 options?: TablePluginOptions
&  { header?: boolean }
) => {

 return {
   type: "td",
   children: [
     {
       type: "p",
       children: [LimValue.slateDOM(),],
     },
   ],
 };
};