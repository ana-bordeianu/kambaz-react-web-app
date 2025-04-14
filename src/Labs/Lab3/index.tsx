import "./index.css";

import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";

export default function Lab3() {
	return (
	  <div id="wd-lab3" className="lab-container"> 
		<h3>Lab 3</h3><br />
		<VariablesAndConstants/>
		<VariableTypes/>
		<BooleanVariables/>
		<IfElse/>
		<TernaryOperator/>
		<ConditionalOutputIfElse/>
		<ConditionalOutputInline/>
		<LegacyFunctions/>
		<ArrowFunctions/>
		<ImpliedReturn/>
		<TemplateLiterals/>
  </div>
  )};
