import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'

export const Bg = styled(Box)`
  height: 400px;
`

export const HrDivider = styled(Divider)`

  //border-top: 1px dashed #8c8b8b;
  border: 0;
  height: 2px;
  width: 10%;
  position: relative;
  margin: 50px auto;
    background: #6eddff;

    &:before {
      content: '';
      width: 6px;
      height: 6px;
      background: #6eddff;
      display: inline-block;
      border: 2px solid #6eddff;
      position: absolute;
      top: -5px;
      left: 50%;
      margin: 0 0 0 -3px;
      transform: rotate(45deg);
      -ms-transform: rotate(45deg); /* IE 9 */
      -webkit-transform: rotate(45deg); /* Opera, Chrome, and Safari */
    }
  }
`
