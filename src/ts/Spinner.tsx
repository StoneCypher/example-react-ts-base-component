
import * as React    from 'react';
import * as ReactDOM from 'react-dom';





type IncDecHook = (val: number) => void;

const Spinner = ({value, changeBy}: {value: number, changeBy: IncDecHook}) =>

    <div>
      <input type="button" onClick={() => changeBy(-1)} value="&darr;" />
      <big>{value}</big>
      <input type="button" onClick={() => changeBy(1)}  value="&uarr;" />
    </div>;





export { Spinner };
