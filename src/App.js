import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter as Router } from 'react-router-dom';
import Publish from './Publish';
function App() {
    return (_jsx(Router, { children: _jsx(Publish, {}) }));
}
export default App;
