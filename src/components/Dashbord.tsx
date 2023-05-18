import { Button, Col, Row, Statistic, Card } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

export default function Dashbord() {
  return (
    <>
      <h1>Dashbord</h1>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Active Users" value={112893} />
        </Col>
        <Col span={12}>
          <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
          <Button style={{ marginTop: 16 }} type="primary">
            Recharge
          </Button>
        </Col>
        <Col span={12}>
          <Statistic title="Active Users" value={112893} loading />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              // ref: https://github.com/ant-design/ant-design-icons/issues/572
              prefix={<ArrowUpOutlined rev={undefined} />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined rev={undefined} />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </>
  )
}