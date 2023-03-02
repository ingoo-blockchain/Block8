// React 커스텀 hook
import React, { useState } from "react"

const useInput = (intitalValue) => {
    // 상태를 만들기
    const [value, setValue] = useState(intitalValue)
    const onChange = (e) => {
        setValue(e.target.value)
    }

    return {
        value,
        onChange,
    }
}

export default useInput
