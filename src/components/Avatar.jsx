import React from "react";

const items = [
  {
    name: "To Hai Ha",
    gender: true,
    image: "images/img1.png",
  },
  {
    name: "Vu Nam Anh",
    gender: true,
    image: "images/img2.png",
  },
  {
    name: "Lai thi teo",
    gender: false,
    image: "images/img3.png",
  },
];

// Component hiển thị 1 avatar
const AvatarInfo = ({ name, gender, image }) => {
  const prefix = gender === true ? "Mr" : "Miss";
  return (
    <div style={{ marginBottom: "20px" }}>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        Hello, {prefix} {name}!
      </div>
    </div>
  );
};

// Component chính
const Avatar = () => {
  return (
    <div>
      {items.map((item, idx) => (
        <AvatarInfo
          key={idx}
          name={item.name}
          gender={item.gender}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Avatar;
