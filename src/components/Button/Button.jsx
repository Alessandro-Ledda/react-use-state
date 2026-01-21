function Button(props) {
    // destrutturiamo
    const { title, content, onBtnToggle, isOpen } = props;

    return (
        <>
            <button className="btn"
                onClick={onBtnToggle}>{title}
            </button>
            {isOpen && <div>{content}</div>}

        </>
    )


}

export default Button