/**
 * 
 * @param {string} value 
 * @param {(s: string) => void)} onChange 
 * @returns 
 */

export function Range({value, onChange, label, disabled}) {


    // console.log(value)

    return <div>
        <input
            type="range"
            id='range-price'
            min={0}
            max={5}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={!disabled}
        />
        <label htmlFor="range-price" className="label">{label}</label>
    </div>
}