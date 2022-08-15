import Head from "next/head";
import { Admin } from "../../components/Admin";

const AdminPageContent = () => (
  <div>
    <Head>
      <title>Merchant Administration - Settings</title>
    </Head>
    <main>
      <h1>Settings</h1>
    </main>
  </div>
);
const AdminPage = () => (
  <Admin title="Admin main page">
    <AdminPageContent />
  </Admin>
);

export default AdminPage;
