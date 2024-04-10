/**
 * 
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void} onChange
 * @returns 
 */

/* ------------------------- ELEMENT INPUT RECHERCHE ------------------------ */
export function Input({ placeholder, value, onChange }) {
    return <div>
        <input
            type="text"
            className='form-control'
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
}