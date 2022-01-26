import React from "react";
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import {
  provideVSCodeDesignSystem,
  vsCodeBadge,
  vsCodeButton,
  vsCodeCheckbox,
  vsCodeDataGrid,
  vsCodeDataGridCell,
  vsCodeDataGridRow,
  vsCodeDivider,
  vsCodeDropdown,
  vsCodeLink,
  vsCodeOption,
  vsCodePanels,
  vsCodePanelTab,
  vsCodePanelView,
  vsCodeProgressRing,
  vsCodeRadio,
  vsCodeRadioGroup,
  vsCodeTag,
  vsCodeTextArea,
  vsCodeTextField,
} from "@vscode/webview-ui-toolkit";

const { wrap } = provideReactWrapper(React, provideVSCodeDesignSystem());

export const VSCodeBadge = wrap(vsCodeBadge());
export const VSCodeButton = wrap(vsCodeButton());
export const VSCodeCheckbox = wrap(vsCodeCheckbox());
export const VSCodeDataGrid = wrap(vsCodeDataGrid());
export const VSCodeDataGridCell = wrap(vsCodeDataGridCell());
export const VSCodeDataGridRow = wrap(vsCodeDataGridRow());
export const VSCodeDivider = wrap(vsCodeDivider());
export const VSCodeDropdown = wrap(vsCodeDropdown());
export const VSCodeLink = wrap(vsCodeLink());
export const VSCodeOption = wrap(vsCodeOption());
export const VSCodePanels = wrap(vsCodePanels());
export const VSCodePanelTab = wrap(vsCodePanelTab());
export const VSCodePanelView = wrap(vsCodePanelView());
export const VSCodeProgressRing = wrap(vsCodeProgressRing());
export const VSCodeRadio = wrap(vsCodeRadio());
export const VSCodeRadioGroup = wrap(vsCodeRadioGroup());
export const VSCodeTag = wrap(vsCodeTag());
export const VSCodeTextArea = wrap(vsCodeTextArea());
export const VSCodeTextField = wrap(vsCodeTextField());
