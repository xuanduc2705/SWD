import { Columnz, DataTablez, StatusBody } from "@/components";
import { LoadDialog } from "@/components/Dialogz";
import { HeaderListForm } from "@/components/FormList";
import { FormUpdateDialog, InputForm } from "@/components/FormUpdate";
import { useGetParams } from "@/hooks";
import { Button, Dialog } from "@/uiCore";
import { useState } from "react";
import { useGetAllBooking } from "../utils";
import { switchStatus } from "../api";
import { ConfirmDialog } from "primereact/confirmdialog";
import { useGetAllDoctor } from "@/module/doctor/utils";
import { shift } from "@/constants";

const Check = () => {
  const initParam = useGetParams();
  const [params, setParams] = useState(initParam);
  const [visible, setVisible] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [show, setShow] = useState(false);
  const [idU, setIdU] = useState(false);
  const [idd, setIdd] = useState();
  const [infos, setInfos] = useState();
  const handleClick = (e) => {
    setShow(true);
    setIdU(e);
  };
  const data_booking = useGetAllBooking(params);
  const accept = async () => {
    await switchStatus({ id: idd, status: 1 });
    setParams((pre) => {
      return { ...pre, render: !pre.render };
    });
  };
  const reject = async () => {
    await switchStatus({ id: idd, status: 2 });
    setParams((pre) => {
      return { ...pre, render: !pre.render };
    });
  };
  const handleNo = async (id) => {
    setDialog(true);
    setIdd(id);
  };
  const handleYes = async (id) => {
    setDialog(true);
    setIdd(id);
  };

  const statusConvert = (status) => {
    if (status == 0) {
      return <p className="font-bold">Đang chờ duyệt</p>;
    }
    if (status == 2) {
      return (
        <p className="font-bold" style={{ color: "red", fontWeight: "bold" }}>
          Đã từ chối
        </p>
      );
    }
    if (status == 1) {
      return (
        <p className="font-bold" style={{ color: "#14b8a6" }}>
          Đã duyệt
        </p>
      );
    }
    return <></>;
  };
  const list = useGetAllDoctor();
  const shiftlist = shift;
  console.log(idU);
  return (
    <div>
      <div className="card mx-auto ">
        <HeaderListForm title="Danh sách đơn đặt lịch" />
        <ConfirmDialog
          group="declarative"
          visible={dialog}
          onHide={() => setDialog(false)}
          message="Bạn chắc chắn với hành động?"
          header="Thông báo"
          icon="pi pi-exclamation-triangle"
          accept={accept}
          reject={reject}
        />
        <FormUpdateDialog
          // checkId={true}
          // handleData={handleData}
          title="Thông tin người dùng"
          visible={show}
          setVisible={setShow}
          onHide={() => setShow(false)}
          handleAfterCallApi={() => window.location.reload()}
        >
          <InputForm
            // value={infos.email_contact}
            label="Tên"
            readOnly
            value={idU?.fullName}
          />
          <InputForm
            // value={infos.email_contact}
            label="Email"
            readOnly
            value={idU?.email}
          />
          <InputForm
            // value={infos.phone_contact}
            label="Số điện thoại "
            value={idU?.phoneNumber}
            readOnly
          />
          <InputForm
            // value={infos.phone_contact}
            label="Ngày tạo đơn"
            value={String(idU?.createdAt)}
            readOnly
          />
        </FormUpdateDialog>
        <LoadDialog visible={visible} />

        <DataTablez
          title="đơn"
          value={data_booking}
          totalRecords={1}
          params={params}
          setParams={setParams}
        >
          <Columnz header="Tên khách hàng" field="fullName" />
          <Columnz header="Đơn khám" field="" />
          <Columnz
            header="Bác sĩ phụ trách"
            body={(e) => <>{list?.find((i) => i.id == e?.doctorId)?.name}</>}
          />
          <Columnz
            header="Thời gian khám"
            body={(e) => (
              <>
                {shiftlist?.find((i) => i.id == e?.shiftTo)?.time} {}
              </>
            )}
          />
          <Columnz
            body={(e) => (
              <Button
                type="button"
                icon="pi pi-eye"
                rounded
                outlined
                className={"mr-1 mx-auto flex"}
                onClick={() => handleClick(e)}
              />
            )}
            header="Chi tiết khách hàng"
          />
          <Columnz header="Trạng thái" body={(e) => statusConvert(e?.status)} />
          <Columnz
            header="Xác nhận"
            body={(e) => (
              <>
                {e.status == 0 && (
                  <i
                    className="pi pi-check"
                    style={{ fontSize: "1.4rem", color: "#14b8a6" }}
                    onClick={() => handleYes(e?.id)}
                  ></i>
                )}
              </>
            )}
          />
          <Columnz
            header="Từ chối"
            body={(e) => (
              <>
                {e.status == 0 && (
                  <i
                    className="pi pi-times"
                    style={{ fontSize: "1.4rem", color: "#14b8a6" }}
                    onClick={() => handleNo(e?.id)}
                  ></i>
                )}
              </>
            )}
          />
          {/* <Columnz
            body={(e) => (
              <Link to={`/page_list/detail/${e?.id}`}>
                {" "}
                <Button
                  type="button"
                  icon="pi pi-eye"
                  rounded
                  outlined
                  className={"mr-1 mx-auto flex"}
                />
              </Link>
            )}
            header="Chi tiết lịch phân bổ"
          /> */}
        </DataTablez>
      </div>
    </div>
  );
};
export default Check;
