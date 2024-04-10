/* ---------------------------- ELEMENT CHECKBOX ---------------------------- */

export function Checkbox({ checked, onChange, label, id }) {
    return <div>
        <input
            type="checkbox"
            id={id}
            className="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor={id} className='label'>{label}</label>
    </div>
}