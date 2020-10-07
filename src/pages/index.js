import React, { useState } from "react"
import { GlobalStyles } from "@dfds-ui/react-components"
import DateRangePicker from "../components/datepicker/DateRangePicker"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <GlobalStyles></GlobalStyles>
      <div>Datepicker ranged</div>
      <DateRangePicker
        locale="da"
        onDateChange={(a, b) => undefined}
        valid
        startDates={{
          initial: "2019-05-05",
          minDate: "2019-01-01",
          maxDate: "2020-01-01",
        }}
        endDates={{
          initial: "2019-01-12",
          minDate: "2019-01-01",
          maxDate: "2020-01-01",
        }}
        labels={{
          start: "Outbound",
          end: "Return",
          header: "Please select a date",
        }}
      />
    </Layout>
  )
}

export default IndexPage
