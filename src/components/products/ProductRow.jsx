/* -------------------- ELEMENT LIGNE DU TABLEAU PRODUIT -------------------- */

export function ProductRow({ product }) {
    const style = product.stocked ? undefined : { color: 'red' }

    return <tr className='product-row'>
        <td style ={style}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}