import React, { forwardRef } from "react"
import PropTypes from "prop-types"

const shapes = {
  square: "rounded-[0px]"
}
const variants = {
  outline: {
    blue_gray_100: "border-blue_gray-100 border-t border-solid text-blue_gray-900"
  }
}
const sizes = {
  xs: "h-[44px] pl-2.5 pr-[35px] text-sm"
}

const Input = forwardRef(({ className = "", name = "", placeholder = "", type = "text", children, label = "", prefix, suffix, onChange, shape, variant = "outline", size = "xs", color = "blue_gray_100", ...restProps }, ref) => {
  const handleChange = e => {
    if (onChange) onChange(e?.target?.value)
  }

  return (
    <>
      <div className={`${className} flex items-center justify-center gap-1 text-blue_gray-900 text-sm font-medium border-blue_gray-100 border-t border-solid  ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}>
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          type={type}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          {...restProps}
        />
        {!!suffix && suffix}
      </div>
    </>
  )
})

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["blue_gray_100"])
}

export { Input }
