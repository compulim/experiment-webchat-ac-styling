import { css } from '@emotion/css';

const className = css({
  '&.copilot-studio__adaptive-card-player.copilot-studio__adaptive-card-player--customized': {
    fontFamily:
      "'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
    '& button': { fontFamily: 'inherit' },

    '& .ac-actionSet .style-default': {
      border: '1px solid rgb(74, 93, 188)',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '1.4rem',
      cursor: 'pointer',
      padding: '5px 8px',
      bottom: '12px',
      overflow: 'hidden',
      backgroundColor: 'rgb(255, 255, 255)',
      color: 'rgb(36, 58, 94)'
    },
    '& .ac-actionSet .style-default:active:hover': {
      backgroundColor: 'rgb(234, 234, 234)'
    },
    '& .ac-actionSet .style-default:hover': {
      backgroundColor: 'rgb(244, 244, 244)'
    },
    '& .ac-actionSet .style-positive': {
      border: '1px solid transparent',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '1.4rem',
      cursor: 'pointer',
      padding: '5px 8px',
      bottom: '12px',
      overflow: 'hidden',
      backgroundColor: 'rgb(36, 58, 94)',
      color: 'rgb(255, 255, 255)'
    },
    '& .ac-actionSet .style-positive:active:hover': {
      backgroundColor: 'rgb(44, 57, 120)',
      color: 'rgb(255, 255, 255)'
    },
    '& .ac-actionSet .style-positive:hover': {
      backgroundColor: 'rgb(0, 120, 212)',
      color: 'rgb(255, 255, 255)'
    },
    '& .ac-actionSet .style-destructive': {
      border: '1px solid rgb(164, 38, 44)',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '1.4rem',
      cursor: 'pointer',
      padding: '5px 8px',
      bottom: '12px',
      overflow: 'hidden',
      backgroundColor: 'rgb(255, 255, 255)',
      color: 'rgb(164, 38, 44)'
    },
    '& .ac-actionSet .style-destructive:active:hover': {
      backgroundColor: 'rgb(234, 234, 234)'
    },
    '& .ac-actionSet .style-destructive:hover': {
      backgroundColor: 'rgb(244, 244, 244)'
    },
    '& .ac-adaptiveCard': {
      backgroundColor: 'rgb(255, 255, 255) !important'
    },
    '&.ac-container': { border: 'none !important' },
    '&.ac-container iframe': { border: 'none' },
    '&.ac-media-playButton-arrow': {
      color: 'rgb(36, 58, 94)',
      width: 'unset !important',
      height: 'unset !important',
      borderWidth: '15px 0px 15px 21px !important'
    },
    '& .ac-textBlock :first-child': { boxSizing: 'border-box' },
    '& .ac-textBlock p': { lineHeight: 1.4 },
    '& .ac-textBlock a:focus-visible': {
      boxShadow: 'black 0px 0px 0px 1px inset',
      outline: 'black auto 1px'
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    '& .ac-actionSet': { flexDirection: 'column !important' as any },
    '& .ac-actionSet .ac-pushButton': { height: '32px' },
    '& .ac-actionSet .ac-pushButton:not(:last-of-type)': {
      marginBottom: '8px'
    },
    '& .ac-image.ac-selectable': { cursor: 'pointer' },
    '& .ac-container.ac-selectable': { cursor: 'pointer' },
    '& .ac-columnSet.ac-selectable': { cursor: 'pointer' },
    '& .ac-input.ac-choiceSetInput-multiSelect > div:not(:last-child)': {
      marginBottom: '8px'
    },
    '& .ac-input.ac-choiceSetInput-multiSelect > div': {
      minHeight: '20px',
      alignItems: 'flex-start !important'
    },
    '& .ac-input.ac-toggleInput': {
      minHeight: '20px',
      alignItems: 'flex-start !important'
    },
    "& .ac-input.ac-choiceSetInput-multiSelect input[type='checkbox']": {
      width: '20px',
      height: '20px',
      boxSizing: 'border-box',
      cursor: 'pointer'
    },
    "& .ac-input.ac-choiceSetInput-multiSelect input[type='checkbox']::before": {
      content: "''",
      fontFamily: "'Fluent MDL2 Hybrid Icons'",
      fontSize: '16px',
      borderRadius: '2px',
      color: 'transparent',
      background: 'rgb(255, 255, 255)',
      height: '20px',
      width: '20px',
      boxSizing: 'border-box',
      border: '1px solid rgb(102, 102, 102)',
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 700
    },
    "&.ac-input.ac-choiceSetInput-multiSelect input[type='checkbox']:checked::before": {
      backgroundColor: 'rgb(36, 58, 94)',
      color: 'rgb(255, 255, 255)',
      borderColor: 'rgb(36, 58, 94)'
    },
    "&.ac-input.ac-choiceSetInput-multiSelect input[type='checkbox']:disabled::before": {
      borderColor: 'rgb(200, 200, 200)'
    },
    "&.ac-input.ac-choiceSetInput-multiSelect input[type='checkbox']:disabled:checked::before": {
      backgroundColor: 'rgb(200, 200, 200)',
      borderColor: 'rgb(200, 200, 200)'
    },
    "&.ac-input.ac-choiceSetInput-multiSelect input[type='checkbox']:hover::before": {
      color: 'rgb(33, 33, 33)'
    },
    "&.ac-input.ac-choiceSetInput-multiSelect input[type='checkbox']:hover:checked::before": {
      backgroundColor: 'rgb(44, 57, 120)',
      color: 'rgb(255, 255, 255)',
      borderColor: 'rgb(44, 57, 120)'
    },
    "&.ac-input.ac-toggleInput input[type='checkbox']": {
      width: '20px',
      height: '20px',
      boxSizing: 'border-box',
      cursor: 'pointer'
    },
    "&.ac-input.ac-toggleInput input[type='checkbox']::before": {
      content: "''",
      fontFamily: "'Fluent MDL2 Hybrid Icons'",
      fontSize: '16px',
      borderRadius: '2px',
      color: 'transparent',
      background: 'rgb(255, 255, 255)',
      height: '20px',
      width: '20px',
      boxSizing: 'border-box',
      border: '1px solid rgb(102, 102, 102)',
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 700
    },
    "& .ac-input.ac-toggleInput input[type='checkbox']:checked::before": {
      backgroundColor: 'rgb(36, 58, 94)',
      color: 'rgb(255, 255, 255)',
      borderColor: 'rgb(36, 58, 94)'
    },
    "& .ac-input.ac-toggleInput input[type='checkbox']:disabled::before": {
      borderColor: 'rgb(200, 200, 200)'
    },
    "& .ac-input.ac-toggleInput input[type='checkbox']:disabled:checked::before": {
      backgroundColor: 'rgb(200, 200, 200)',
      borderColor: 'rgb(200, 200, 200)'
    },
    "& .ac-input.ac-toggleInput input[type='checkbox']:hover::before": {
      color: 'rgb(33, 33, 33)'
    },
    "& .ac-input.ac-toggleInput input[type='checkbox']:hover:checked::before": {
      backgroundColor: 'rgb(44, 57, 120)',
      color: 'rgb(255, 255, 255)',
      borderColor: 'rgb(44, 57, 120)'
    },
    '& .ac-input.ac-choiceSetInput-expanded > div:not(:last-child)': {
      marginBottom: '8px'
    },
    '& .ac-input.ac-choiceSetInput-expanded > div': {
      minHeight: '20px',
      alignItems: 'flex-start !important'
    },
    "& .ac-input.ac-choiceSetInput-expanded input[type='radio']": {
      width: '20px',
      height: '20px',
      boxSizing: 'border-box',
      cursor: 'pointer'
    },
    "& .ac-input.ac-choiceSetInput-expanded input[type='radio']::before": {
      content: "' '",
      fontSize: '16px',
      borderRadius: '50%',
      backgroundColor: 'rgb(255, 255, 255)',
      height: '20px',
      width: '20px',
      boxSizing: 'border-box',
      border: '1px solid rgb(102, 102, 102)',
      display: 'block'
    },
    "& .ac-input.ac-choiceSetInput-expanded input[type='radio']:disabled::before": {
      borderColor: 'rgb(200, 200, 200)'
    },
    "& .ac-input.ac-choiceSetInput-expanded input[type='radio']:disabled:checked::before": {
      borderColor: 'rgb(200, 200, 200)'
    },
    "& .ac-input.ac-choiceSetInput-expanded input[type='radio']:hover::before": {
      borderColor: 'rgb(33, 33, 33)'
    },
    "& .ac-input.ac-choiceSetInput-expanded input[type='radio']:hover:checked::before": {
      color: 'rgb(255, 255, 255)',
      borderColor: 'rgb(44, 57, 120)'
    },
    "& .ac-input.ac-choiceSetInput-expanded input[type='radio']:checked::after": {
      content: "' '",
      mask: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='6' fill='%23212121'/%3E%3Crect x='0.5' y='0.5' width='19' height='19' rx='9.5' stroke='%23212121'/%3E%3C/svg%3E\")",
      display: 'block',
      position: 'relative',
      width: '20px',
      height: '20px',
      top: '-20px',
      backgroundColor: 'rgb(36, 58, 94)'
    },
    "& .ac-input.ac-choiceSetInput-expanded input[type='radio']:hover::after": {
      content: "' '",
      mask: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='6' fill='%23212121'/%3E%3Crect x='0.5' y='0.5' width='19' height='19' rx='9.5' stroke='%23212121'/%3E%3C/svg%3E\")",
      display: 'block',
      position: 'relative',
      width: '20px',
      height: '20px',
      top: '-20px',
      backgroundColor: 'rgb(33, 33, 33)'
    },
    "& .ac-input.ac-choiceSetInput-expanded input[type='radio']:checked:hover::after": {
      content: "' '",
      mask: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='6' fill='%23212121'/%3E%3Crect x='0.5' y='0.5' width='19' height='19' rx='9.5' stroke='%23212121'/%3E%3C/svg%3E\")",
      display: 'block',
      position: 'relative',
      width: '20px',
      height: '20px',
      top: '-20px',
      backgroundColor: 'rgb(44, 57, 120)'
    },
    "& .ac-input.ac-choiceSetInput-expanded input[type='radio']:disabled:checked::after": {
      backgroundColor: 'rgb(200, 200, 200)'
    },
    '& .ac-input.ac-choiceSetInput-multiSelect div > div:first-of-type': {
      maxWidth: '2px'
    },
    '& .ac-input.ac-toggleInput div > div:first-of-type': {
      maxWidth: '2px'
    },
    '& .ac-input.ac-choiceSetInput-expanded div > div:first-of-type': {
      maxWidth: '2px'
    },
    '& .ac-input.ac-textInput': {
      height: '32px',
      boxSizing: 'border-box',
      border: '1px solid rgb(102, 102, 102)',
      borderRadius: '4px',
      padding: '0px 8px 1px',
      color: 'rgb(51, 51, 51)',
      backgroundColor: 'rgb(255, 255, 255)'
    },
    '& .ac-input.ac-textInput:focus': {
      outlineColor: 'rgb(36, 58, 94)'
    },
    '& .ac-input.ac-textInput::placeholder': {
      color: 'rgb(102, 102, 102)'
    },
    '& .ac-input.ac-textInput:disabled::placeholder': {
      color: 'rgb(166, 166, 166)'
    },
    '& .ac-input.ac-textInput:disabled': {
      borderColor: 'rgb(244, 244, 244)',
      backgroundColor: 'rgb(244, 244, 244)',
      color: 'rgb(166, 166, 166)'
    },
    '& .ac-input.ac-dateInput': {
      height: '32px',
      boxSizing: 'border-box',
      border: '1px solid rgb(102, 102, 102)',
      borderRadius: '4px',
      padding: '0px 8px 1px',
      color: 'rgb(51, 51, 51)',
      backgroundColor: 'rgb(255, 255, 255)'
    },
    '& .ac-input.ac-dateInput:focus': {
      outlineColor: 'rgb(36, 58, 94)'
    },
    '& .ac-input.ac-dateInput::placeholder': {
      color: 'rgb(102, 102, 102)'
    },
    '& .ac-input.ac-dateInput:disabled::placeholder': {
      color: 'rgb(166, 166, 166)'
    },
    '& .ac-input.ac-dateInput:disabled': {
      borderColor: 'rgb(244, 244, 244)',
      backgroundColor: 'rgb(244, 244, 244)',
      color: 'rgb(166, 166, 166)'
    },
    '& .ac-input.ac-numberInput': {
      height: '32px',
      boxSizing: 'border-box',
      border: '1px solid rgb(102, 102, 102)',
      borderRadius: '4px',
      padding: '0px 8px 1px',
      color: 'rgb(51, 51, 51)',
      backgroundColor: 'rgb(255, 255, 255)'
    },
    '& .ac-input.ac-numberInput:focus': {
      outlineColor: 'rgb(36, 58, 94)'
    },
    '& .ac-input.ac-numberInput::placeholder': {
      color: 'rgb(102, 102, 102)'
    },
    '& .ac-input.ac-numberInput:disabled::placeholder': {
      color: 'rgb(166, 166, 166)'
    },
    '& .ac-input.ac-numberInput:disabled': {
      borderColor: 'rgb(244, 244, 244)',
      backgroundColor: 'rgb(244, 244, 244)',
      color: 'rgb(166, 166, 166)'
    },
    '& .ac-input.ac-multichoiceInput': {
      height: '32px',
      boxSizing: 'border-box',
      border: '1px solid rgb(102, 102, 102)',
      borderRadius: '4px',
      padding: '0px 8px 1px',
      color: 'rgb(51, 51, 51)',
      backgroundColor: 'rgb(255, 255, 255)'
    },
    '& .ac-input.ac-multichoiceInput:focus': {
      outlineColor: 'rgb(36, 58, 94)'
    },
    '& .ac-input.ac-multichoiceInput::placeholder': {
      color: 'rgb(102, 102, 102)'
    },
    '& .ac-input.ac-multichoiceInput:disabled::placeholder': {
      color: 'rgb(166, 166, 166)'
    },
    '& .ac-input.ac-multichoiceInput:disabled': {
      borderColor: 'rgb(244, 244, 244)',
      backgroundColor: 'rgb(244, 244, 244)',
      color: 'rgb(166, 166, 166)'
    },
    '& .ac-input.ac-timeInput': {
      height: '32px',
      boxSizing: 'border-box',
      border: '1px solid rgb(102, 102, 102)',
      borderRadius: '4px',
      padding: '0px 8px 1px',
      color: 'rgb(51, 51, 51)',
      backgroundColor: 'rgb(255, 255, 255)'
    },
    '& .ac-input.ac-timeInput:focus': {
      outlineColor: 'rgb(36, 58, 94)'
    },
    '& .ac-input.ac-timeInput::placeholder': {
      color: 'rgb(102, 102, 102)'
    },
    '& .ac-input.ac-timeInput:disabled::placeholder': {
      color: 'rgb(166, 166, 166)'
    },
    '& .ac-input.ac-timeInput:disabled': {
      borderColor: 'rgb(244, 244, 244)',
      backgroundColor: 'rgb(244, 244, 244)',
      color: 'rgb(166, 166, 166)'
    },
    '& .ac-input.ac-textInput.ac-input-validation-failed': {
      borderColor: 'rgb(168, 0, 0)'
    },
    '& .ac-input.ac-textInput.ac-input-validation-failed:focus': {
      outlineColor: 'rgb(168, 0, 0)'
    },
    '& .ac-input.ac-dateInput.ac-input-validation-failed': {
      borderColor: 'rgb(168, 0, 0)'
    },
    '& .ac-input.ac-dateInput.ac-input-validation-failed:focus': {
      outlineColor: 'rgb(168, 0, 0)'
    },
    '& .ac-input.ac-numberInput.ac-input-validation-failed': {
      borderColor: 'rgb(168, 0, 0)'
    },
    '& .ac-input.ac-numberInput.ac-input-validation-failed:focus': {
      outlineColor: 'rgb(168, 0, 0)'
    },
    '& .ac-input.ac-multichoiceInput.ac-input-validation-failed': {
      borderColor: 'rgb(168, 0, 0)'
    },
    '& .ac-input.ac-multichoiceInput.ac-input-validation-failed:focus': {
      outlineColor: 'rgb(168, 0, 0)'
    },
    '& .ac-input.ac-timeInput.ac-input-validation-failed': {
      borderColor: 'rgb(168, 0, 0)'
    },
    '& .ac-input.ac-timeInput.ac-input-validation-failed:focus': {
      outlineColor: 'rgb(168, 0, 0)'
    },
    '& .ac-input.ac-textInput.ac-multiline': {
      paddingTop: '6px',
      paddingBottom: '6px',
      lineHeight: '20px',
      resize: 'none',
      height: '54px !important'
    },
    '& .ac-inlineActionButton': {
      border: '1px solid rgb(74, 93, 188)',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '1.4rem',
      cursor: 'pointer',
      padding: '5px 8px',
      bottom: '12px',
      overflow: 'hidden',
      backgroundColor: 'rgb(255, 255, 255)',
      color: 'rgb(36, 58, 94)',
      height: '32px'
    },
    '& .ac-inlineActionButton:active': {
      backgroundColor: 'rgb(234, 234, 234)'
    },
    '& .ac-inlineActionButton:hover': {
      backgroundColor: 'rgb(244, 244, 244)'
    },
    '& .ac-input-container': { alignItems: 'flex-end' },
    '& .ac-input.ac-multichoiceInput.ac-choiceSetInput-compact': {
      cursor: 'pointer'
    },
    '& .ac-input.ac-multichoiceInput.ac-choiceSetInput-compact option:checked': {
      backgroundColor: 'rgb(244, 244, 244)'
    },
    '& .ac-anchor': { color: 'rgb(36, 58, 94)', textDecoration: 'none' },
    '& .ac-anchor:hover': {
      color: 'rgb(35, 45, 94)',
      textDecoration: 'underline'
    }
  }
});

export default className;
