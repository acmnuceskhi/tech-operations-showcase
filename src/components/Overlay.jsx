const Overlay = () => {
    return (
        <div
            className="fixed inset-0 bg-black/40"
            style={{
                zIndex: 5,
                pointerEvents: "none",
            }}
        />
    );
};

export default Overlay;
