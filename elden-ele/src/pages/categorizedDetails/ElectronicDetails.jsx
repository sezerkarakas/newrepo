import styled from "styled-components";

function ElektronicDetails({marka, model, turu, renk, garanti}) {
  return (
    <>
      <div className="d-flex flex-nowrap justify-content-between">
        <b>Marka</b>
        <p>{marka}</p>
      </div>
      <Divider />
      <div className="d-flex flex-nowrap justify-content-between">
        <b>Model</b>
        <p>{model}</p>
      </div>
      <Divider />
      <div className="d-flex flex-nowrap justify-content-between">
        <b>Türü</b>
        <p>{turu}</p>
      </div>
      <Divider />
      <div className="d-flex flex-nowrap justify-content-between">
        <b>Renk</b>
        <p>{renk}</p>
      </div>
      <Divider />
      <div className="d-flex flex-nowrap justify-content-between">
        <b>Garanti</b>
        <p>{garanti == "evet" ? "Var" : "Yok"}</p>
      </div>
    </>
  );
}
const Divider = styled.div`
  border-top: 1px solid #dbdbdb;
  padding: 2px 0;
`;

export default ElektronicDetails;