import { itemsMenu } from "@/constants";

const { Menubar } = require("@/uiCore");

const AppTopbar = () => {
  return (
    <div className="card">
      <Menubar model={itemsMenu} />
    </div>
  );
};
export default AppTopbar;
