const Pagination = (props) => {

const {onLeftClick, onRightClick, page, totalPages} = props;

  return (
    <div className="d-flex m-2 p-2">
        <button onClick={onLeftClick}>
            <div>👈</div>
        </button>
        <div className="d-flex flex-wrap align-content-center m-2 fw-bold">{page} de {totalPages}</div>
        <button onClick={onRightClick}>
            <div>👉</div>
        </button>
    </div>
  )
}

export default Pagination