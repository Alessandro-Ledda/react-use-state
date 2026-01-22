function Button(props) {
    // destrutturiamo
    const { title, description, onBtnToggle, isOpen } = props;

    return (
        <>
            <div className="button-item">
                <button className="btn"
                    onClick={onBtnToggle}>{title}
                </button>
                <div className="content">
                    {isOpen && <div>{description}</div>}
                </div>

            </div>

        </>
    )


}

export default Button