import styled from "styled-components";

function UserContact({ id, name, phoneNumber }) {
  return (
    <>
    
      <div
        style={{
          border: "1px solid #dbdbdb",
          backgroundColor: "silver",
          height: "110px",
          boxSizing: "inherit",
          borderRadius:"10px"
        }}
        className="col-md-3"
      >
        <h5 style={{ marginTop: "15px" }}>
          <b>{name}</b>
        </h5>

        <Divider />
        <div
          style={{
            backgroundColor: "white",
            height: "30px",
            marginTop: "10px",
            border:"2px solid grey",
            borderRadius:"5px"
          }}
        >
          <p style={{ marginLeft: "10px" }}>
            <b style={{ marginRight: "20px" }}>Cep</b> {phoneNumber}
          </p>
        </div>
      </div>
    </>
  );
}

const Divider = styled.div`
  border-top: 1px solid #dbdbdb;
  padding: 2px 0;
`;

export default UserContact;