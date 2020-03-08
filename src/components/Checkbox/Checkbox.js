import React from 'react';
import './Checkbox.scss';

class Checkbox extends React.Component {
    render() {
        const {handleChangeMediaType, label, value, name, id, isChecked} = this.props;
        return (
            <React.Fragment>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id={id}
                        value={value}
                        name={name}
                        onChange={handleChangeMediaType}
                        defaultChecked={isChecked}
                    />
                    <label className="form-check-label" htmlFor={id}>
                        {label}
                    </label>
                </div>
            </React.Fragment>
        );
    }
}
export default Checkbox;