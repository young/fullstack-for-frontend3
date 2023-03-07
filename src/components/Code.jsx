import React from 'react'
import styled from '@emotion/styled'
import t from 'prop-types'


const CodeStyled = styled.div`
  padding: 15px 20px;
  background: white;
  color: white;
  background: black
`

const Code = props => {
    return (
    <>
        <div>{props.explainer}</div>
        <CodeStyled {...props}>
            <code>{props.children}</code>
        </CodeStyled>
    </>
    );

}

Code.propTypes = {
    explainer: t.string
}

export default Code;

// Alert.defaultProps = {
//   kind: 'info',
// }
