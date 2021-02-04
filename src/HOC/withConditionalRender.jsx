/* HOC add methods addCondition(conditionId, ConditionComponent), clearCondition(conditionId), renderCondition(conditionId), setAllConditions(array)
with Hoc has renderCondition(conditionId) to render screens, in setAllConditions(array)
*/
import React, {PureComponent} from "react";
import screens from "../MOCK/screens.jsx";
import checkInArOfObjByKeyAndVal from "../FUNC/checkInArOfObjByKeyAndVal";

const withConditionalRender = (Component) => {
  class WithConditionalRender extends PureComponent {
    constructor(props) {
      super(props);
      this.props = props;
      this.state = {
        conditions: [],
      };
    }
    setAllConditions(array) {
      this.setState({
        conditions: array,
      });
    }
    componentDidMount() {
      this.setAllConditions(screens);
      /*
      this.addCondition(-1, <Placeholder image={`assets/img/placeholder_1.gif`} {...this.props}/>);
      this.addCondition(0, <SimpleWithTimerControllerWrapped {...this.props} />);
      this.addCondition(1, <SimpleTimerWrapped {...this.props} />);
      this.addCondition(2, <SimpleActionTimerWrapped {...this.props} />);
      this.addCondition(3, <SimpleCustomStateWrapped {...this.props} />);
 */
    }
    // addCondition(conditionId, ConditionComponent) {
    //   const {conditions} = this.state;
    //   if (checkInArOfObjByKeyAndVal(conditions, `conditionId`, conditionId) !== false) {
    //     return `Condition with code ${conditionId} already exist, total conditions: ${conditions.length}`;
    //   }
    //   this.setState((prev) => {
    //     const noMutate = prev.conditions.slice();
    //     noMutate.push({
    //       conditionId,
    //       conditionRender: ConditionComponent,
    //     });
    //     return {
    //       conditions: noMutate,
    //     };
    //   });
    //   return conditionId;
    // }
    // clearCondition(conditionId) {
    //   const {conditions} = this.state;
    //   const index = checkInArOfObjByKeyAndVal(conditions, `conditionId`, conditionId);
    //   if (index !== false) {
    //     this.setState((prev) => {
    //       const noMutate = prev.conditions.slice();
    //       noMutate.splice(index, 1);
    //       return {
    //         conditions: noMutate,
    //       };
    //     });
    //     return true;
    //   }
    //   return false;
    // }
    renderCondition(conditionId) {
      const {conditions} = this.state;
      const index = checkInArOfObjByKeyAndVal(conditions, `conditionId`, conditionId);
      if (index !== false) {
        return conditions[index].conditionRender;
      }
      return `No component with Id -> ${conditionId}`;
    }
    // static checkByConditionId(array, Id) {
    //   for (let i = 0; i < array.length; i++) {
    //     if (array[i].conditionId === Id) {
    //       return i;
    //     }
    //   }
    //   return false;
    // }
    render() {
      return <Component
        {...this.props}
        // addCondition={(conditionId, ConditionComponent) => {
        //   return this.addCondition(conditionId, ConditionComponent);
        // }}
        // clearCondition={(conditionId) => {
        //   return this.clearCondition(conditionId);
        // }}
        renderCondition={(conditionId) => {
          return this.renderCondition(conditionId);
        }}
      />;
    }
  }

  return WithConditionalRender;
};

export default withConditionalRender;

