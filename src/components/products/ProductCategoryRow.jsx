/* ------------------ ELEMENT LINE DE CATEGORIE DE PRODUIT ------------------ */

export function ProductCategoryRow({ name }) {
    return <tr className='product-category'>
        <td colSpan={2} ><strong>{name}</strong></td>
    </tr>
}