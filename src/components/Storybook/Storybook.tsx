import React from 'react'
import styles from "./Storybook.module.scss"
import Button from '../Button/Button'
import { colors } from '@/lib/colors'
import Input from '../Input/Input'
import SelectBox from '../SelectBox/SelectBox'
import Container from '../Container/Container'
import Row from '../Grid/Row'
import Col from '../Grid/Col'
import AppRating from '../AppRating/AppRating'
import { ToolTip } from '../ToolTip/ToolTip'
import ErrorLabel from '../ErrorLabel/ErrorLabel'
import ProgressBar from '../ProgressBar/ProgressBar'
import Spinner from '../Spinner/Spinner'
import Toggle from '../Toggle/Toggle'
import TextArea from '../TextArea/TextArea'


export default function Storybook() {
  return (
    <Container>
      <div className={styles.container}>
        <h1 className={styles.title}>Next Boilerplate</h1>
        <Button className={styles.btn} name="Button Medium Primary" size='medium' bg={colors.primary} color={colors.white} />
        <Button className={styles.btn} name="Button Medium Secondary" size='medium' bg={colors.secondary} color={colors.white} />
        <Input isSearchable value='Search Input' readOnly />
        <Input value='read only input' readOnly />
        <SelectBox placeholder='Select placeholder' selected={{ label: 'OptionLabel1', value: 'OptionValue1' }} options={[{ label: 'OptionLabel1', value: 'OptionValue1' }, { label: 'OptionLabel2', value: 'OptionValue2' }]} />
        <TextArea value='TextArea' readOnly />
        <ErrorLabel text={"Error Label"} />

      </div>
      <Row gap={3} col={{ lg: 12, md: 8, sm: 2 }}>
        <Col span={{ lg: 2, md: 2, sm: 2 }}>
          Row Text
        </Col>
        <Col span={{ lg: 2, md: 2, sm: 2 }}>
          Row Text
        </Col>
        <Col span={{ lg: 2, md: 2, sm: 2 }}>
          Row Text
        </Col>
        <Col span={{ lg: 2, md: 2, sm: 2 }}>
          Row Text
        </Col>
        <Col span={{ lg: 2, md: 2, sm: 2 }}>
          Row Text
        </Col>
        <Col span={{ lg: 2, md: 2, sm: 2 }}>
          Row Text
        </Col>
        <Col span={{ lg: 2, md: 2, sm: 2 }}>
          Row Text
        </Col>
      </Row>
      <ToolTip id="rating" content="3 yıldız">
        <AppRating point={3} />
      </ToolTip>
      <ProgressBar value={60} containerColor={colors.primary} progressColor={colors.secondary} />
    </Container>
  )
}




