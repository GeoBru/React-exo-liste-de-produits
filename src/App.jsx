
import { Fragment } from "react";
import { useState } from "react";
import { Checkbox } from './components/forms/Checkbox';
import { Input } from './components/forms/Input';
import { ProductCategoryRow } from "./components/products/ProductCategoryRow";
import { ProductRow } from "./components/products/ProductRow";
import { Range } from './components/forms/Range';

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

/* ----------------------------- COEUR DE L'APPLI ---------------------------- */
function App() {

  const [showStockedOnly, setShowStockedOnly] = useState(false)
  const [search, setSearch] = useState('')
  const [priceWanted, setPriceWanted] = useState('')
  const [showByPrice, setShowByPrice] = useState(false)

  const visibleProducts = PRODUCTS.filter(product => {
    /* ---------------- SI ON VEUT VOIR QUE LES PRODUITS EN STOCK --------------- */
    /* ------------------------- EN COCHANT LA CHECKBOX ------------------------- */
    /* ------------------ ON ENVERRA QUE LES PRODUITS EN STOCK ------------------ */
    if (showStockedOnly && !product.stocked) {
      return false
    }

    /* --------------------------- FILTRE RECHERCHE --------------------------- */
    if (search && !product.name.includes(search)) {
      return false
    }

    /* ----------------------------- FILTRE PAR PRIX ---------------------------- */
    let truePrice = product.price.replace('$', '')
    if (truePrice > priceWanted && showByPrice) {
      return false
    }

    return true
  })

  return <div>
    <SearchBar
      search={search}
      onSearchChange={setSearch}
      showStockedOnly={showStockedOnly}
      onStockedOnlyChange={setShowStockedOnly}
      showPriceWanted={priceWanted}
      onPriceWantedChange={setPriceWanted}
      showByPrice={showByPrice}
      onShowByPriceChange={setShowByPrice}
    />
    <ProductTable products={visibleProducts} />
  </div>

}

/* -------------------------- ELEMENT DE RECHERCHE -------------------------- */
function SearchBar({ showStockedOnly, onStockedOnlyChange, search, onSearchChange, showPriceWanted, onPriceWantedChange, showByPrice, onShowByPriceChange }) {
  return <Fragment>
    <div>
      <Input
        value={search}
        onChange={onSearchChange}
        placeholder='Rechercher'
      />

      <Checkbox
        checked={showStockedOnly}
        onChange={onStockedOnlyChange}
        id="stocked"
        label="N'afficher que les produits en stock"
      />

      <Checkbox
        checked={showByPrice}
        onChange={onShowByPriceChange}
        label="Activer la recherche par prix"
      />

      <Range
        value={showPriceWanted}
        onChange={onPriceWantedChange}
        label={showPriceWanted}
        disabled={showByPrice} //
      />
    </div>
  </Fragment>
}

/* ------------------- PRENDS ET AJOUTE LES PRODUITS DANS LE TABLEAU ------------------ */
function ProductTable({ products }) {
  const rows = []
  let lastCategory = null

  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
    }
    lastCategory = product.category
    rows.push(<ProductRow product={product} key={product.name} />)
  }

  return <table className='my-table'>
    <thead className='my-flex'>
      <tr className='colonne-name'>
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    </thead>
    <tbody className='my-flex'>
      {rows}
    </tbody>
  </table>
}

export default App
