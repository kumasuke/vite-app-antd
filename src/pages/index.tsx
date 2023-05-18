import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import Dashbord from '../components/Dashbord'

function IndexPage() {

  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: '#00b96b'
      }
    }}>
      <Dashbord />
    </ConfigProvider>
  )
}

export default IndexPage
