function Notifi() {
  return (
    <div>
      <img
        style={{ marginRight: "20px", cursor: "pointer" }}
        src="src/assets/NotiBut.svg"
        alt="prof"
        width="35"
        height="25"
        className="prof"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      />
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div
          className="offcanvas-header"
          style={{ backgroundColor: "#5E839f" }}
        >
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body" style={{ backgroundColor: "#5E839f" }}>
          ......
        </div>
      </div>
    </div>
  );
}

export default Notifi;
