//export named
export function Profile1(){
     return (
        <div>
            <img src="/images/img1.png" alt="avatar1" />
        </div>
    );
};

export function Profile2(){
     return (
        <div>
            <img src="/images/img2.png" alt="avatar2" />
        </div>
    );
};

//export default
const Gallery = () => {
    return (
        <div>
            <img src="/images/img1.png" alt="avatar1" />
            <img src="/images/img2.png" alt="avatar1" />
        </div>
        
    );
};
export default Gallery;
