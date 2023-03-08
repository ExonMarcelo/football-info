const Skeleton = ({width, height, extraClass}) => {
    return(
        <div className={`skeleton ${extraClass}`} style={{width: `${width}`, height: `${height}`}}>
        </div>
    );
}

export default Skeleton;