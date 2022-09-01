import styled from "styled-components"

const TooltipWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  outline: none;
  stroke: none;
  background: #F3F6F8;
  fill: none;

  :hover {
    border: none;
    background: blue;
    outline: none;
  }

  :active {
    border: none;
    background: blue;
    outline: none;
  }

  :focus {
    border: none;
    background: blue;
    outline: none;
  }
`

const CustomTooltip = (props, { active, payload }) => {
  return (
    <TooltipWrapper>

    </TooltipWrapper>
  )
}

export default CustomTooltip