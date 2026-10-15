(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/service-agreement/CustomerForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomerForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/service-agreement/FormField.tsx [app-client] (ecmascript)");
"use client";
;
;
function CustomerForm({ data, onChange, errors }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 gap-5 md:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "agreementNumber",
                label: "Agreement Number",
                value: data.agreementNumber,
                error: errors.agreementNumber,
                onChange: onChange,
                placeholder: "Enter agreement number"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "customerName",
                label: "Customer Name",
                value: data.customerName,
                error: errors.customerName,
                onChange: onChange,
                placeholder: "Enter customer name"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "customerAge",
                label: "Customer Age",
                value: data.customerAge,
                error: errors.customerAge,
                onChange: onChange,
                type: "number",
                min: "18",
                placeholder: "Enter customer age"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "customerDateOfBirth",
                label: "Date of Birth",
                value: data.customerDateOfBirth,
                error: errors.customerDateOfBirth,
                onChange: onChange,
                type: "date"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "customerAadharLastFour",
                label: "Aadhaar Last 4 Digits",
                value: data.customerAadharLastFour,
                error: errors.customerAadharLastFour,
                onChange: onChange,
                inputMode: "numeric",
                maxLength: 4,
                digitsOnly: true,
                placeholder: "XXXX"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "customerPhone",
                label: "Mobile Number",
                value: data.customerPhone,
                error: errors.customerPhone,
                onChange: onChange,
                type: "tel",
                inputMode: "numeric",
                maxLength: 10,
                digitsOnly: true,
                placeholder: "Enter 10-digit mobile number"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "customerMail",
                label: "Email Address",
                value: data.customerMail,
                error: errors.customerMail,
                onChange: onChange,
                type: "email",
                placeholder: "customer@example.com"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "customerPlace",
                label: "Customer Place",
                value: data.customerPlace,
                error: errors.customerPlace,
                onChange: onChange,
                placeholder: "Enter place"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "customerDate",
                label: "Customer Date",
                value: data.customerDate,
                error: errors.customerDate,
                onChange: onChange,
                type: "date"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "fullAddressCustomer",
                label: "Full Residential Address",
                value: data.fullAddressCustomer,
                error: errors.fullAddressCustomer,
                onChange: onChange,
                control: "textarea",
                rows: 3,
                placeholder: "Enter complete residential address",
                wrapperClassName: "md:col-span-2"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "payerName",
                label: "Payer Name",
                value: data.payerName,
                error: errors.payerName,
                onChange: onChange,
                placeholder: "Enter payer name"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "relationship",
                label: "Relationship",
                value: data.relationship,
                error: errors.relationship,
                onChange: onChange,
                placeholder: "e.g. Father, Mother, Spouse"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = CustomerForm;
var _c;
__turbopack_context__.k.register(_c, "CustomerForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/service-agreement/DocumentPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DocumentPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function formatDate(value) {
    if (!value) {
        return "";
    }
    const [year, month, day] = value.split("-");
    if (year && month && day) {
        return `${day}/${month}/${year}`;
    }
    return value;
}
function formatTime(value) {
    if (!value) {
        return "";
    }
    const [hours, minutes] = value.split(":");
    if (!hours || !minutes) {
        return value;
    }
    const hourNumber = Number(hours);
    if (Number.isNaN(hourNumber)) {
        return value;
    }
    const period = hourNumber >= 12 ? "PM" : "AM";
    const hour12 = hourNumber % 12 || 12;
    return `${String(hour12).padStart(2, "0")}:${minutes} ${period}`;
}
function displayValue(value) {
    return value?.trim() || "—";
}
function getFieldValue(field) {
    if (field.format === "date") {
        return formatDate(field.value);
    }
    if (field.format === "time") {
        return formatTime(field.value);
    }
    return field.value;
}
function PreviewField({ label, value, emphasis = "default" }) {
    const display = displayValue(value);
    const valueClassName = emphasis === "total" ? "text-lg font-bold text-emerald-700" : emphasis === "strong" ? "text-sm font-semibold text-gray-950" : "text-sm font-medium text-gray-900";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-gray-200 bg-gray-50 p-3.5 transition-colors hover:border-gray-300 hover:bg-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `break-words ${valueClassName}`,
                children: display
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_c = PreviewField;
function PreviewSection({ number, title, description, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "border-t border-gray-200 pt-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-700",
                        children: number
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-gray-900",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-xs text-gray-500",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
_c1 = PreviewSection;
function getReviewSections(data) {
    return [
        {
            number: "01",
            title: "Agreement & Customer",
            fields: [
                {
                    key: "agreementNumber",
                    label: "Agreement Number",
                    value: data.agreementNumber
                },
                {
                    key: "customerName",
                    label: "Customer Name",
                    value: data.customerName
                },
                {
                    key: "customerAge",
                    label: "Customer Age",
                    value: data.customerAge
                },
                {
                    key: "customerDateOfBirth",
                    label: "Date of Birth",
                    value: data.customerDateOfBirth,
                    format: "date"
                },
                {
                    key: "customerAadharLastFour",
                    label: "Aadhaar Last 4 Digits",
                    value: data.customerAadharLastFour
                },
                {
                    key: "fullAddressCustomer",
                    label: "Full Residential Address",
                    value: data.fullAddressCustomer
                },
                {
                    key: "customerPhone",
                    label: "Customer Phone",
                    value: data.customerPhone
                },
                {
                    key: "customerMail",
                    label: "Customer Email",
                    value: data.customerMail
                },
                {
                    key: "customerPlace",
                    label: "Customer Place",
                    value: data.customerPlace
                },
                {
                    key: "customerDate",
                    label: "Customer Date",
                    value: data.customerDate,
                    format: "date"
                }
            ]
        },
        {
            number: "02",
            title: "Payer Details",
            fields: [
                {
                    key: "payerName",
                    label: "Payer Name",
                    value: data.payerName
                },
                {
                    key: "relationship",
                    label: "Relationship",
                    value: data.relationship
                }
            ]
        },
        {
            number: "03",
            title: "Plan Details",
            fields: [
                {
                    key: "planName",
                    label: "Plan Name",
                    value: data.planName
                },
                {
                    key: "planNumber",
                    label: "Plan Number",
                    value: data.planNumber
                },
                {
                    key: "issueDate",
                    label: "Issue Date",
                    value: data.issueDate,
                    format: "date"
                },
                {
                    key: "validityDate",
                    label: "Validity Date",
                    value: data.validityDate,
                    format: "date"
                },
                {
                    key: "feesWithoutTax",
                    label: "Fees Without Tax",
                    value: data.feesWithoutTax
                },
                {
                    key: "tax",
                    label: "Tax",
                    value: data.tax
                },
                {
                    key: "totalPayable",
                    label: "Total Payable",
                    value: data.totalPayable
                }
            ]
        },
        {
            number: "04",
            title: "Payment Details",
            fields: [
                {
                    key: "utr",
                    label: "Payment Reference / UTR",
                    value: data.utr
                },
                {
                    key: "paymentDate",
                    label: "Payment Date",
                    value: data.paymentDate,
                    format: "date"
                },
                {
                    key: "paymentTime",
                    label: "Payment Time",
                    value: data.paymentTime,
                    format: "time"
                },
                {
                    key: "paymentMode",
                    label: "Payment Mode",
                    value: data.paymentMode
                },
                {
                    key: "payee",
                    label: "Payee",
                    value: data.payee
                }
            ]
        },
        {
            number: "05",
            title: "Verification & Agent",
            fields: [
                {
                    key: "language",
                    label: "Language",
                    value: data.language
                },
                {
                    key: "agentName",
                    label: "Agent Name",
                    value: data.agentName
                },
                {
                    key: "callDate",
                    label: "Call Date",
                    value: data.callDate,
                    format: "date"
                },
                {
                    key: "callTime",
                    label: "Call Time",
                    value: data.callTime,
                    format: "time"
                },
                {
                    key: "verifierName",
                    label: "Verifier Name",
                    value: data.verifierName
                }
            ]
        },
        {
            number: "06",
            title: "Acceptance",
            fields: [
                {
                    key: "acceptanceDate",
                    label: "Acceptance Date",
                    value: data.acceptanceDate,
                    format: "date"
                },
                {
                    key: "acceptanceTime",
                    label: "Acceptance Time",
                    value: data.acceptanceTime,
                    format: "time"
                }
            ]
        },
        {
            number: "07",
            title: "Document Delivery",
            fields: [
                {
                    key: "documentSent",
                    label: "Documents Sent",
                    value: data.documentSent
                },
                {
                    key: "sentDate",
                    label: "Sent Date",
                    value: data.sentDate,
                    format: "date"
                },
                {
                    key: "sentTime",
                    label: "Sent Time",
                    value: data.sentTime,
                    format: "time"
                },
                {
                    key: "typeOfSendingPlatform",
                    label: "Sending Platform",
                    value: data.typeOfSendingPlatform
                }
            ]
        },
        {
            number: "08",
            title: "Witness Details",
            fields: [
                {
                    key: "witness1Name",
                    label: "Witness 1 Name",
                    value: data.witness1Name
                },
                {
                    key: "witness1Address",
                    label: "Witness 1 Address",
                    value: data.witness1Address
                },
                {
                    key: "witness1Mobile",
                    label: "Witness 1 Mobile",
                    value: data.witness1Mobile
                },
                {
                    key: "witness1Date",
                    label: "Witness 1 Date",
                    value: data.witness1Date,
                    format: "date"
                },
                {
                    key: "witness2Name",
                    label: "Witness 2 Name",
                    value: data.witness2Name
                },
                {
                    key: "witness2Address",
                    label: "Witness 2 Address",
                    value: data.witness2Address
                },
                {
                    key: "witness2Mobile",
                    label: "Witness 2 Mobile",
                    value: data.witness2Mobile
                },
                {
                    key: "witness2Date",
                    label: "Witness 2 Date",
                    value: data.witness2Date,
                    format: "date"
                }
            ]
        },
        {
            number: "09",
            title: "Execution Details",
            fields: [
                {
                    key: "effectiveDate",
                    label: "Effective Date",
                    value: data.effectiveDate,
                    format: "date"
                },
                {
                    key: "executionDate",
                    label: "Execution Date",
                    value: data.executionDate,
                    format: "date"
                },
                {
                    key: "executionTime",
                    label: "Execution Time",
                    value: data.executionTime,
                    format: "time"
                },
                {
                    key: "executionAmPm",
                    label: "AM / PM",
                    value: data.executionAmPm
                },
                {
                    key: "currentDate",
                    label: "Current / Document Date",
                    value: data.currentDate,
                    format: "date"
                }
            ]
        }
    ];
}
function getCompletionStatus(data) {
    const sections = getReviewSections(data);
    const fields = sections.flatMap((section)=>section.fields);
    const completed = fields.filter((field)=>Boolean(field.value?.trim())).length;
    return {
        completed,
        total: fields.length,
        remaining: fields.length - completed,
        isComplete: completed === fields.length
    };
}
function ReviewStatusPanel({ data }) {
    const sections = getReviewSections(data);
    const status = getCompletionStatus(data);
    const completionPercentage = status.total > 0 ? Math.round(status.completed / status.total * 100) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 border-b border-gray-200 bg-gradient-to-r from-white to-emerald-50/50 p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700",
                                        children: "Form Review"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 499,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mt-1 text-lg font-bold text-gray-950",
                                        children: "Filled Information"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 503,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs leading-5 text-gray-500",
                                        children: "Check what has been filled and what is still remaining."
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 507,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                lineNumber: 498,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-full ${status.isComplete ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-bold",
                                    children: [
                                        status.completed,
                                        "/",
                                        status.total
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                    lineNumber: 519,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                lineNumber: 512,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                        lineNumber: 497,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-1.5 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-semibold text-gray-500",
                                        children: "Completion"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 528,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-bold text-gray-700",
                                        children: [
                                            completionPercentage,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 532,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                lineNumber: 527,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 overflow-hidden rounded-full bg-gray-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-full rounded-full transition-all ${status.isComplete ? "bg-emerald-600" : "bg-amber-500"}`,
                                    style: {
                                        width: `${completionPercentage}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                    lineNumber: 538,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                lineNumber: 537,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                        lineNumber: 526,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 rounded-lg bg-emerald-50 px-3 py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-semibold uppercase text-emerald-600",
                                        children: "Filled"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 551,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 text-sm font-bold text-emerald-800",
                                        children: status.completed
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 555,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                lineNumber: 550,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 rounded-lg bg-amber-50 px-3 py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-semibold uppercase text-amber-600",
                                        children: "Remaining"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 561,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 text-sm font-bold text-amber-800",
                                        children: status.remaining
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 565,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                lineNumber: 560,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                        lineNumber: 549,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                lineNumber: 496,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-0 flex-1 overflow-y-auto p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-5",
                    children: sections.map((section)=>{
                        const completedCount = section.fields.filter((field)=>Boolean(field.value?.trim())).length;
                        const sectionComplete = completedCount === section.fields.length;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2.5 flex items-center justify-between gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex min-w-0 items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${sectionComplete ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`,
                                                    children: section.number
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                    lineNumber: 588,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "truncate text-xs font-bold text-gray-900",
                                                    children: section.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                    lineNumber: 598,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                            lineNumber: 587,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `shrink-0 text-[10px] font-semibold ${sectionComplete ? "text-emerald-600" : "text-amber-600"}`,
                                            children: [
                                                completedCount,
                                                "/",
                                                section.fields.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                            lineNumber: 603,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                    lineNumber: 586,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: section.fields.map((field)=>{
                                        const filled = Boolean(field.value?.trim());
                                        const value = getFieldValue(field);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-lg border px-3 py-2.5 ${filled ? "border-emerald-100 bg-emerald-50/50" : "border-amber-100 bg-amber-50/60"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${filled ? "bg-emerald-600 text-white" : "bg-amber-500 text-white"}`,
                                                        children: filled ? "✓" : "!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                        lineNumber: 630,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0 flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] font-semibold uppercase tracking-wide text-gray-500",
                                                                children: field.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                                lineNumber: 641,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `mt-0.5 break-words text-xs ${filled ? "font-medium text-gray-900" : "font-medium text-amber-700"}`,
                                                                children: filled ? value : "Not filled"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                                lineNumber: 645,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                        lineNumber: 640,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                lineNumber: 629,
                                                columnNumber: 25
                                            }, this)
                                        }, field.key, false, {
                                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                            lineNumber: 621,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                    lineNumber: 615,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, section.number, true, {
                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                            lineNumber: 584,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                    lineNumber: 574,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                lineNumber: 573,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
        lineNumber: 494,
        columnNumber: 5
    }, this);
}
_c2 = ReviewStatusPanel;
function DocumentPreview({ data, pdfUrl, isGenerating = false, isDownloaded = false, onBackToEdit, onConfirmAndDownload }) {
    const status = getCompletionStatus(data);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-gray-200 bg-gradient-to-r from-white to-emerald-50/40 px-5 py-5 sm:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-700",
                                            children: "Step 2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                            lineNumber: 686,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium text-gray-500",
                                            children: "Final Review"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                            lineNumber: 690,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                    lineNumber: 685,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-gray-950 sm:text-2xl",
                                    children: "Full Agreement Preview"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                    lineNumber: 695,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 max-w-2xl text-sm leading-6 text-gray-500",
                                    children: "Review the generated agreement PDF and verify all information before downloading the final document."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                    lineNumber: 699,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                            lineNumber: 684,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "shrink-0 rounded-xl border border-emerald-100 bg-white px-4 py-3 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-bold uppercase tracking-[0.12em] text-gray-500",
                                    children: "Agreement Number"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                    lineNumber: 706,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm font-bold text-emerald-700",
                                    children: displayValue(data.agreementNumber)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                    lineNumber: 710,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                            lineNumber: 705,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                    lineNumber: 683,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                lineNumber: 682,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-100/70 p-4 sm:p-5 lg:p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-[minmax(0,1fr)_380px] gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-base font-bold text-gray-950",
                                                    children: "Generated Agreement PDF"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                    lineNumber: 724,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-xs text-gray-500",
                                                    children: "Actual PDF generated from the master Service Agreement DOCX."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                    lineNumber: 728,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                            lineNumber: 723,
                                            columnNumber: 15
                                        }, this),
                                        isGenerating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 self-start rounded-full bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "h-2 w-2 animate-pulse rounded-full bg-amber-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                    lineNumber: 735,
                                                    columnNumber: 19
                                                }, this),
                                                "Generating PDF..."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                            lineNumber: 734,
                                            columnNumber: 17
                                        }, this) : pdfUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 self-start rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                    lineNumber: 740,
                                                    columnNumber: 19
                                                }, this),
                                                "PDF Ready"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                            lineNumber: 739,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 self-start rounded-full bg-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-600",
                                            children: "PDF Not Generated"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                            lineNumber: 744,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                    lineNumber: 722,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm",
                                    children: isGenerating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex min-h-[700px] flex-col items-center justify-center px-6 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-7 w-7 animate-spin rounded-full border-2 border-emerald-200 border-t-emerald-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                    lineNumber: 754,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                lineNumber: 753,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-base font-bold text-gray-900",
                                                children: "Preparing your Service Agreement"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                lineNumber: 757,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 max-w-md text-sm leading-6 text-gray-500",
                                                children: "The master DOCX template is being populated and converted into the final PDF. Please wait."
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                lineNumber: 761,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 752,
                                        columnNumber: 17
                                    }, this) : pdfUrl ? /*
                 * The browser's own PDF viewer is chrome we do
                 * not control, and its Download button hands
                 * over the review copy with the yellow
                 * highlighting on it.
                 *
                 * Hiding that toolbar leaves Confirm & Download
                 * as the only way out of this screen, which is
                 * the one that serves the clean agreement.
                 */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        src: `${pdfUrl}#toolbar=0&navpanes=0&statusbar=0`,
                                        title: "Service Agreement PDF Preview",
                                        className: "h-[75vh] min-h-[700px] w-full border-0"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 777,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex min-h-[700px] flex-col items-center justify-center px-6 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "26",
                                                    height: "26",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    "aria-hidden": "true",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M7 3H14L19 8V21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5 3 7 3Z",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.7",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                            lineNumber: 793,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M14 3V8H19",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.7",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                            lineNumber: 801,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M9 13H15",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.7",
                                                            strokeLinecap: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                            lineNumber: 809,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M9 17H15",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.7",
                                                            strokeLinecap: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                            lineNumber: 816,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                    lineNumber: 785,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                lineNumber: 784,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-base font-bold text-gray-900",
                                                children: "PDF preview will appear here"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                lineNumber: 825,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 max-w-md text-sm leading-6 text-gray-500",
                                                children: "Generate the agreement to load the actual master-template PDF for review."
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                lineNumber: 829,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 783,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                    lineNumber: 750,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                            lineNumber: 721,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0 h-[calc(75vh+60px)] min-h-[760px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticky top-4 h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewStatusPanel, {
                                    data: data
                                }, void 0, false, {
                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                    lineNumber: 841,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                lineNumber: 840,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                            lineNumber: 839,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                    lineNumber: 719,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                lineNumber: 718,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-gray-200 p-5 sm:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-amber-200 bg-amber-50 p-4 sm:p-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700",
                                    children: "!"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                    lineNumber: 851,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-bold text-amber-900",
                                            children: "Final Review Before PDF Confirmation"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                            lineNumber: 856,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-xs leading-5 text-amber-800",
                                            children: "Please verify the customer, payer, plan, payment, verification, acceptance, document delivery and execution information carefully. The final PDF is generated from the master Service Agreement DOCX template while preserving the template's existing document structure and formatting."
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                            lineNumber: 860,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                    lineNumber: 855,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                            lineNumber: 850,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                        lineNumber: 849,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold uppercase tracking-wide text-gray-500",
                                            children: "Review Status"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                            lineNumber: 875,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm font-semibold text-gray-900",
                                            children: [
                                                status.completed,
                                                " of ",
                                                status.total,
                                                " fields completed"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                            lineNumber: 879,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                    lineNumber: 874,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `rounded-full px-3 py-1.5 text-xs font-semibold ${status.isComplete ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`,
                                    children: status.isComplete ? "Review Complete" : `${status.remaining} Field${status.remaining === 1 ? "" : "s"} Remaining`
                                }, void 0, false, {
                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                    lineNumber: 884,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                            lineNumber: 873,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                        lineNumber: 872,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                lineNumber: 848,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky bottom-0 z-30 border-t border-gray-200 bg-white/95 px-5 py-4 shadow-[0_-8px_24px_rgba(0,0,0,0.06)] backdrop-blur sm:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: isDownloaded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-emerald-700",
                                        children: "PDF downloaded successfully"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 907,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 text-xs text-gray-500",
                                        children: "The generated agreement has been downloaded."
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 911,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                lineNumber: 906,
                                columnNumber: 15
                            }, this) : pdfUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-gray-900",
                                        children: "Agreement PDF is ready"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 917,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 text-xs text-gray-500",
                                        children: "Review the PDF and information panel before downloading."
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 921,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                lineNumber: 916,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-gray-900",
                                        children: "Agreement review"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 927,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 text-xs text-gray-500",
                                        children: "Generate the PDF to view the actual document."
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 931,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                lineNumber: 926,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                            lineNumber: 904,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2 sm:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onBackToEdit,
                                    disabled: isGenerating,
                                    className: "inline-flex min-h-11 items-center justify-center rounded-xl border border-gray-300 bg-white px-5 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50",
                                    children: "← Back & Edit"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                    lineNumber: 939,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onConfirmAndDownload,
                                    disabled: !pdfUrl || isGenerating,
                                    className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500",
                                    children: isDownloaded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                lineNumber: 956,
                                                columnNumber: 19
                                            }, this),
                                            "Downloaded"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 955,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "17",
                                                height: "17",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                "aria-hidden": "true",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 3V15",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                        lineNumber: 969,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M7 10L12 15L17 10",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                        lineNumber: 977,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M5 21H19",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                        lineNumber: 985,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                lineNumber: 961,
                                                columnNumber: 19
                                            }, this),
                                            "Confirm & Download PDF"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 960,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                    lineNumber: 948,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                            lineNumber: 938,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                    lineNumber: 903,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                lineNumber: 902,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
        lineNumber: 680,
        columnNumber: 5
    }, this);
}
_c3 = DocumentPreview;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "PreviewField");
__turbopack_context__.k.register(_c1, "PreviewSection");
__turbopack_context__.k.register(_c2, "ReviewStatusPanel");
__turbopack_context__.k.register(_c3, "DocumentPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/service-agreement/FormField.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const CONTROL_BASE = "w-full rounded-lg border text-sm outline-none transition";
const CONTROL_VALID = "border-gray-300 text-gray-900 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100";
/*
 * The invalid state has to survive next to the valid classes
 * above, so every property it overrides (border, background,
 * text and ring colour) is restated here.
 */ const CONTROL_INVALID = "border-red-500 bg-red-50 text-red-900 placeholder-red-400 focus:border-red-600 focus:ring-2 focus:ring-red-200";
function controlClassName(hasError, extra) {
    return [
        CONTROL_BASE,
        extra,
        hasError ? CONTROL_INVALID : CONTROL_VALID
    ].join(" ");
}
function FormField({ field, label, value, error, onChange, control = "input", type = "text", placeholder, hint, prefix, options, rows = 3, min, step, maxLength, inputMode, digitsOnly = false, wrapperClassName = "", inputClassName }) {
    const hasError = Boolean(error);
    const errorId = `${field}-error`;
    const handleChange = (event)=>{
        const raw = event.target.value;
        if (!digitsOnly) {
            onChange(field, raw);
            return;
        }
        const digits = raw.replace(/\D/g, "");
        onChange(field, maxLength ? digits.slice(0, maxLength) : digits);
    };
    /*
   * A prefixed control needs extra left padding so the text
   * does not run into the prefix glyph.
   */ const padding = inputClassName ?? (prefix ? "py-2.5 pl-8 pr-3" : "px-3 py-2.5");
    const sharedProps = {
        id: field,
        value,
        onChange: handleChange,
        "aria-invalid": hasError,
        "aria-describedby": hasError ? errorId : undefined
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: wrapperClassName,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: field,
                className: `mb-1.5 block text-sm font-medium ${hasError ? "text-red-700" : "text-gray-700"}`,
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/FormField.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: prefix ? "relative" : undefined,
                children: [
                    prefix ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm ${hasError ? "text-red-500" : "text-gray-500"}`,
                        children: prefix
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/FormField.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this) : null,
                    control === "textarea" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        ...sharedProps,
                        rows: rows,
                        placeholder: placeholder,
                        className: controlClassName(hasError, `resize-y ${padding}`)
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/FormField.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this) : null,
                    control === "select" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        ...sharedProps,
                        className: controlClassName(hasError, `${padding} ${hasError ? "" : "bg-white"}`),
                        children: (options ?? []).map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: option.value,
                                children: option.label
                            }, option.value, false, {
                                fileName: "[project]/app/components/service-agreement/FormField.tsx",
                                lineNumber: 182,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/FormField.tsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this) : null,
                    control === "input" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ...sharedProps,
                        type: type,
                        placeholder: placeholder,
                        min: min,
                        step: step,
                        maxLength: maxLength,
                        inputMode: inputMode,
                        className: controlClassName(hasError, padding)
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/FormField.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/FormField.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            hasError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: errorId,
                className: "mt-1.5 flex items-start gap-1 text-xs font-semibold text-red-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "⚠"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/FormField.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this),
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/FormField.tsx",
                lineNumber: 204,
                columnNumber: 9
            }, this) : hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1.5 text-xs text-gray-500",
                children: hint
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/FormField.tsx",
                lineNumber: 212,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/service-agreement/FormField.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_c = FormField;
var _c;
__turbopack_context__.k.register(_c, "FormField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/service-agreement/PaymentForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PaymentForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/service-agreement/FormField.tsx [app-client] (ecmascript)");
"use client";
;
;
const PAYMENT_MODES = [
    {
        value: "",
        label: "Select payment mode"
    },
    {
        value: "UPI",
        label: "UPI"
    },
    {
        value: "NEFT",
        label: "NEFT"
    },
    {
        value: "RTGS",
        label: "RTGS"
    },
    {
        value: "IMPS",
        label: "IMPS"
    },
    {
        value: "Bank Transfer",
        label: "Bank Transfer"
    },
    {
        value: "Debit Card",
        label: "Debit Card"
    },
    {
        value: "Credit Card",
        label: "Credit Card"
    },
    {
        value: "Other",
        label: "Other"
    }
];
function PaymentForm({ data, onChange, errors }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 gap-5 md:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "utr",
                label: "Payment Reference / UTR",
                value: data.utr,
                error: errors.utr,
                onChange: onChange,
                placeholder: "Enter payment reference / UTR"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "paymentDate",
                label: "Payment Date",
                value: data.paymentDate,
                error: errors.paymentDate,
                onChange: onChange,
                type: "date"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "paymentTime",
                label: "Payment Time",
                value: data.paymentTime,
                error: errors.paymentTime,
                onChange: onChange,
                type: "time"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "paymentMode",
                label: "Payment Mode",
                value: data.paymentMode,
                error: errors.paymentMode,
                onChange: onChange,
                control: "select",
                options: PAYMENT_MODES
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "payee",
                label: "Payee",
                value: data.payee,
                error: errors.payee,
                onChange: onChange,
                placeholder: "Enter payee name",
                hint: "Enter the payee exactly as applicable to the official payment record.",
                wrapperClassName: "md:col-span-2"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = PaymentForm;
var _c;
__turbopack_context__.k.register(_c, "PaymentForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/service-agreement/PlanForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlanForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/service-agreement/FormField.tsx [app-client] (ecmascript)");
"use client";
;
;
function PlanForm({ data, onChange, errors }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 gap-5 md:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "planName",
                label: "Plan Name",
                value: data.planName,
                error: errors.planName,
                onChange: onChange,
                placeholder: "Enter plan name"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "planNumber",
                label: "Plan Number",
                value: data.planNumber,
                error: errors.planNumber,
                onChange: onChange,
                placeholder: "Enter plan number"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "issueDate",
                label: "Issue Date",
                value: data.issueDate,
                error: errors.issueDate,
                onChange: onChange,
                type: "date"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "validityDate",
                label: "Validity Date",
                value: data.validityDate,
                error: errors.validityDate,
                onChange: onChange,
                type: "date"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "feesWithoutTax",
                label: "Fees (Excluding Taxes)",
                value: data.feesWithoutTax,
                error: errors.feesWithoutTax,
                onChange: onChange,
                type: "number",
                min: "0",
                step: "0.01",
                prefix: "₹",
                placeholder: "0.00"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "tax",
                label: "Taxes",
                value: data.tax,
                error: errors.tax,
                onChange: onChange,
                type: "number",
                min: "0",
                step: "0.01",
                prefix: "₹",
                placeholder: "0.00"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "totalPayable",
                label: "Total Amount Payable",
                value: data.totalPayable,
                error: errors.totalPayable,
                onChange: onChange,
                type: "number",
                min: "0",
                step: "0.01",
                prefix: "₹",
                placeholder: "0.00",
                inputClassName: "py-2.5 pl-8 pr-3 font-medium",
                hint: "Total amount payable can be calculated from Fees + Taxes.",
                wrapperClassName: "md:col-span-2"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = PlanForm;
var _c;
__turbopack_context__.k.register(_c, "PlanForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/service-agreement/VerificationForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VerificationForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/service-agreement/FormField.tsx [app-client] (ecmascript)");
"use client";
;
;
const DOCUMENT_SENT_OPTIONS = [
    {
        value: "",
        label: "Select option"
    },
    {
        value: "Yes",
        label: "Yes"
    },
    {
        value: "No",
        label: "No"
    }
];
const SENDING_PLATFORMS = [
    {
        value: "",
        label: "Select platform"
    },
    {
        value: "Email",
        label: "Email"
    },
    {
        value: "WhatsApp",
        label: "WhatsApp"
    },
    {
        value: "Email & WhatsApp",
        label: "Email & WhatsApp"
    },
    {
        value: "Physical Copy",
        label: "Physical Copy"
    },
    {
        value: "Other",
        label: "Other"
    }
];
const AM_PM_OPTIONS = [
    {
        value: "",
        label: "Select"
    },
    {
        value: "AM",
        label: "AM"
    },
    {
        value: "PM",
        label: "PM"
    }
];
function VerificationForm({ data, onChange, errors }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 gap-5 md:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "language",
                label: "Language of Explanation",
                value: data.language,
                error: errors.language,
                onChange: onChange,
                placeholder: "e.g. Hindi, English"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "agentName",
                label: "Agent / Authorized Representative",
                value: data.agentName,
                error: errors.agentName,
                onChange: onChange,
                placeholder: "Enter agent name"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "callDate",
                label: "Welcome / Verification Call Date",
                value: data.callDate,
                error: errors.callDate,
                onChange: onChange,
                type: "date"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "callTime",
                label: "Welcome / Verification Call Time",
                value: data.callTime,
                error: errors.callTime,
                onChange: onChange,
                type: "time"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "verifierName",
                label: "Verifier Name",
                value: data.verifierName,
                error: errors.verifierName,
                onChange: onChange,
                placeholder: "Enter verifier name",
                wrapperClassName: "md:col-span-2"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "acceptanceDate",
                label: "Acceptance Date",
                value: data.acceptanceDate,
                error: errors.acceptanceDate,
                onChange: onChange,
                type: "date"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "acceptanceTime",
                label: "Acceptance Time",
                value: data.acceptanceTime,
                error: errors.acceptanceTime,
                onChange: onChange,
                type: "time"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "documentSent",
                label: "Documents Sent",
                value: data.documentSent,
                error: errors.documentSent,
                onChange: onChange,
                control: "select",
                options: DOCUMENT_SENT_OPTIONS
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "typeOfSendingPlatform",
                label: "Type of Sending Platform",
                value: data.typeOfSendingPlatform,
                error: errors.typeOfSendingPlatform,
                onChange: onChange,
                control: "select",
                options: SENDING_PLATFORMS
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "sentDate",
                label: "Document Sent Date",
                value: data.sentDate,
                error: errors.sentDate,
                onChange: onChange,
                type: "date"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "sentTime",
                label: "Document Sent Time",
                value: data.sentTime,
                error: errors.sentTime,
                onChange: onChange,
                type: "time"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "effectiveDate",
                label: "Effective Date",
                value: data.effectiveDate,
                error: errors.effectiveDate,
                onChange: onChange,
                type: "date"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "executionDate",
                label: "Execution / Signing Date",
                value: data.executionDate,
                error: errors.executionDate,
                onChange: onChange,
                type: "date"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "executionTime",
                label: "Execution / Signing Time",
                value: data.executionTime,
                error: errors.executionTime,
                onChange: onChange,
                type: "time"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "executionAmPm",
                label: "AM / PM",
                value: data.executionAmPm,
                error: errors.executionAmPm,
                onChange: onChange,
                control: "select",
                options: AM_PM_OPTIONS
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "currentDate",
                label: "Current / Document Date",
                value: data.currentDate,
                error: errors.currentDate,
                onChange: onChange,
                type: "date"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = VerificationForm;
var _c;
__turbopack_context__.k.register(_c, "VerificationForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/service-agreement/WitnessForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WitnessForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/service-agreement/FormField.tsx [app-client] (ecmascript)");
"use client";
;
;
function WitnessForm({ data, onChange, errors }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 gap-5 md:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "witness1Name",
                label: "Witness 1 Name (optional)",
                value: data.witness1Name,
                error: errors.witness1Name,
                onChange: onChange,
                placeholder: "Enter witness 1 full name"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "witness2Name",
                label: "Witness 2 Name (optional)",
                value: data.witness2Name,
                error: errors.witness2Name,
                onChange: onChange,
                placeholder: "Enter witness 2 full name"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "witness1Address",
                label: "Witness 1 Address (optional)",
                value: data.witness1Address,
                error: errors.witness1Address,
                onChange: onChange,
                control: "textarea",
                rows: 3,
                placeholder: "Enter witness 1 address"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "witness2Address",
                label: "Witness 2 Address (optional)",
                value: data.witness2Address,
                error: errors.witness2Address,
                onChange: onChange,
                control: "textarea",
                rows: 3,
                placeholder: "Enter witness 2 address"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "witness1Mobile",
                label: "Witness 1 Mobile Number (optional)",
                value: data.witness1Mobile,
                error: errors.witness1Mobile,
                onChange: onChange,
                type: "tel",
                inputMode: "numeric",
                maxLength: 10,
                digitsOnly: true,
                placeholder: "10-digit mobile number"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "witness2Mobile",
                label: "Witness 2 Mobile Number (optional)",
                value: data.witness2Mobile,
                error: errors.witness2Mobile,
                onChange: onChange,
                type: "tel",
                inputMode: "numeric",
                maxLength: 10,
                digitsOnly: true,
                placeholder: "10-digit mobile number"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "witness1Date",
                label: "Witness 1 Date (optional)",
                value: data.witness1Date,
                error: errors.witness1Date,
                onChange: onChange,
                type: "date"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$FormField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                field: "witness2Date",
                label: "Witness 2 Date (optional)",
                value: data.witness2Date,
                error: errors.witness2Date,
                onChange: onChange,
                type: "date"
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = WitnessForm;
var _c;
__turbopack_context__.k.register(_c, "WitnessForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/lib/validation/service-agreement.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateServiceAgreement",
    ()=>validateServiceAgreement
]);
function isValidDate(value) {
    if (!value) {
        return false;
    }
    const date = new Date(`${value}T00:00:00`);
    return !Number.isNaN(date.getTime());
}
function isValidTime(value) {
    return /^([01]\d|2[0-3]):([0-5]\d)$/.test(value);
}
function isValidAmount(value) {
    if (!value.trim()) {
        return false;
    }
    const amount = Number(value);
    return Number.isFinite(amount) && amount >= 0;
}
function validateServiceAgreement(data) {
    const errors = [];
    const fieldErrors = {};
    /**
   * Records a problem against a single form field.
   *
   * Only the first problem per field is kept: a field shows one
   * message at a time, and the first one is always the most
   * specific reason it failed.
   */ const addError = (field, message)=>{
        errors.push(message);
        if (!fieldErrors[field]) {
            fieldErrors[field] = message;
        }
    };
    // =========================
    // AGREEMENT
    // =========================
    if (!data.agreementNumber.trim()) {
        addError("agreementNumber", "Agreement Number is required.");
    }
    // =========================
    // CUSTOMER DETAILS
    // =========================
    if (!data.customerName.trim()) {
        addError("customerName", "Customer Name is required.");
    }
    if (!data.customerAge.trim()) {
        addError("customerAge", "Customer Age is required.");
    } else {
        const age = Number(data.customerAge);
        if (!Number.isFinite(age) || age < 18 || age > 120) {
            addError("customerAge", "Customer Age must be between 18 and 120.");
        }
    }
    if (!data.customerDateOfBirth.trim()) {
        addError("customerDateOfBirth", "Customer Date of Birth is required.");
    } else if (!isValidDate(data.customerDateOfBirth)) {
        addError("customerDateOfBirth", "Customer Date of Birth is invalid.");
    }
    if (!/^\d{4}$/.test(data.customerAadharLastFour)) {
        addError("customerAadharLastFour", "Aadhaar Last 4 Digits must contain exactly 4 digits.");
    }
    if (!data.fullAddressCustomer.trim()) {
        addError("fullAddressCustomer", "Full Residential Address is required.");
    }
    if (!data.customerPhone.trim()) {
        addError("customerPhone", "Customer Mobile Number is required.");
    } else if (!/^[6-9]\d{9}$/.test(data.customerPhone.trim())) {
        addError("customerPhone", "Customer Mobile Number must be a valid 10-digit Indian mobile number.");
    }
    if (!data.customerMail.trim()) {
        addError("customerMail", "Customer Email Address is required.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.customerMail.trim())) {
        addError("customerMail", "Customer Email Address is invalid.");
    }
    if (!data.customerPlace.trim()) {
        addError("customerPlace", "Customer Place is required.");
    }
    if (!data.customerDate.trim()) {
        addError("customerDate", "Customer Date is required.");
    } else if (!isValidDate(data.customerDate)) {
        addError("customerDate", "Customer Date is invalid.");
    }
    // =========================
    // PAYER DETAILS
    // =========================
    /*
   * payerName is the single logical payer-name
   * input used for both:
   *
   * {Name}
   * {PayerName}
   *
   * Relationship is optional only when no payer
   * information is supplied.
   */ if (data.payerName.trim() && !data.relationship.trim()) {
        addError("relationship", "Relationship is required when Payer Name is provided.");
    }
    if (!data.payerName.trim() && data.relationship.trim()) {
        addError("payerName", "Payer Name is required when Relationship is provided.");
    }
    // =========================
    // PLAN DETAILS
    // =========================
    if (!data.planName.trim()) {
        addError("planName", "Plan Name is required.");
    }
    if (!data.planNumber.trim()) {
        addError("planNumber", "Plan Number is required.");
    }
    if (!data.issueDate.trim()) {
        addError("issueDate", "Issue Date is required.");
    } else if (!isValidDate(data.issueDate)) {
        addError("issueDate", "Issue Date is invalid.");
    }
    if (!data.validityDate.trim()) {
        addError("validityDate", "Validity Date is required.");
    } else if (!isValidDate(data.validityDate)) {
        addError("validityDate", "Validity Date is invalid.");
    }
    if (data.issueDate && data.validityDate && isValidDate(data.issueDate) && isValidDate(data.validityDate)) {
        const issueDate = new Date(`${data.issueDate}T00:00:00`);
        const validityDate = new Date(`${data.validityDate}T00:00:00`);
        if (validityDate < issueDate) {
            addError("validityDate", "Validity Date cannot be earlier than Issue Date.");
        }
    }
    if (!isValidAmount(data.feesWithoutTax)) {
        addError("feesWithoutTax", "Fees Without Tax must be a valid amount.");
    }
    if (!isValidAmount(data.tax)) {
        addError("tax", "Tax must be a valid amount.");
    }
    if (!isValidAmount(data.totalPayable)) {
        addError("totalPayable", "Total Payable must be a valid amount.");
    }
    // =========================
    // PAYMENT DETAILS
    // =========================
    if (!data.utr.trim()) {
        addError("utr", "Payment Reference / UTR is required.");
    }
    if (!data.paymentDate.trim()) {
        addError("paymentDate", "Payment Date is required.");
    } else if (!isValidDate(data.paymentDate)) {
        addError("paymentDate", "Payment Date is invalid.");
    }
    if (!data.paymentTime.trim()) {
        addError("paymentTime", "Payment Time is required.");
    } else if (!isValidTime(data.paymentTime)) {
        addError("paymentTime", "Payment Time is invalid.");
    }
    if (!data.paymentMode.trim()) {
        addError("paymentMode", "Payment Mode is required.");
    }
    if (!data.payee.trim()) {
        addError("payee", "Payee is required.");
    }
    // =========================
    // VERIFICATION / AGENT
    // =========================
    if (!data.language.trim()) {
        addError("language", "Language of Explanation is required.");
    }
    if (!data.agentName.trim()) {
        addError("agentName", "Agent / Authorized Representative is required.");
    }
    if (!data.callDate.trim()) {
        addError("callDate", "Verification Call Date is required.");
    } else if (!isValidDate(data.callDate)) {
        addError("callDate", "Verification Call Date is invalid.");
    }
    if (!data.callTime.trim()) {
        addError("callTime", "Verification Call Time is required.");
    } else if (!isValidTime(data.callTime)) {
        addError("callTime", "Verification Call Time is invalid.");
    }
    if (!data.verifierName.trim()) {
        addError("verifierName", "Verifier Name is required.");
    }
    // =========================
    // ACCEPTANCE
    // =========================
    if (!data.acceptanceDate.trim()) {
        addError("acceptanceDate", "Acceptance Date is required.");
    } else if (!isValidDate(data.acceptanceDate)) {
        addError("acceptanceDate", "Acceptance Date is invalid.");
    }
    if (!data.acceptanceTime.trim()) {
        addError("acceptanceTime", "Acceptance Time is required.");
    } else if (!isValidTime(data.acceptanceTime)) {
        addError("acceptanceTime", "Acceptance Time is invalid.");
    }
    // =========================
    // DOCUMENT DELIVERY
    // =========================
    if (data.documentSent !== "Yes" && data.documentSent !== "No") {
        addError("documentSent", "Documents Sent must be either Yes or No.");
    }
    if (!data.typeOfSendingPlatform.trim()) {
        addError("typeOfSendingPlatform", "Type of Sending Platform is required.");
    }
    if (!data.sentDate.trim()) {
        addError("sentDate", "Document Sent Date is required.");
    } else if (!isValidDate(data.sentDate)) {
        addError("sentDate", "Document Sent Date is invalid.");
    }
    if (!data.sentTime.trim()) {
        addError("sentTime", "Document Sent Time is required.");
    } else if (!isValidTime(data.sentTime)) {
        addError("sentTime", "Document Sent Time is invalid.");
    }
    // =========================
    // WITNESS DETAILS
    // =========================
    /*
   * Witnesses apply only to Part B (physical execution).
   *
   * They are therefore optional, and are validated for
   * format only when a value has been supplied.
   */ const witnesses = [
        {
            label: "Witness 1",
            mobileField: "witness1Mobile",
            dateField: "witness1Date",
            mobile: data.witness1Mobile,
            date: data.witness1Date
        },
        {
            label: "Witness 2",
            mobileField: "witness2Mobile",
            dateField: "witness2Date",
            mobile: data.witness2Mobile,
            date: data.witness2Date
        }
    ];
    for (const witness of witnesses){
        if (witness.mobile.trim() && !/^[6-9]\d{9}$/.test(witness.mobile.trim())) {
            addError(witness.mobileField, `${witness.label} Mobile Number must be a valid 10-digit Indian mobile number.`);
        }
        if (witness.date.trim() && !isValidDate(witness.date)) {
            addError(witness.dateField, `${witness.label} Date is invalid.`);
        }
    }
    // =========================
    // EXECUTION
    // =========================
    if (!data.effectiveDate.trim()) {
        addError("effectiveDate", "Effective Date is required.");
    } else if (!isValidDate(data.effectiveDate)) {
        addError("effectiveDate", "Effective Date is invalid.");
    }
    if (!data.executionDate.trim()) {
        addError("executionDate", "Execution / Signing Date is required.");
    } else if (!isValidDate(data.executionDate)) {
        addError("executionDate", "Execution / Signing Date is invalid.");
    }
    if (!data.executionTime.trim()) {
        addError("executionTime", "Execution / Signing Time is required.");
    } else if (!isValidTime(data.executionTime)) {
        addError("executionTime", "Execution / Signing Time is invalid.");
    }
    if (data.executionAmPm !== "AM" && data.executionAmPm !== "PM") {
        addError("executionAmPm", "Execution AM/PM must be either AM or PM.");
    }
    // =========================
    // CURRENT DATE
    // =========================
    if (!data.currentDate.trim()) {
        addError("currentDate", "Current / Document Date is required.");
    } else if (!isValidDate(data.currentDate)) {
        addError("currentDate", "Current / Document Date is invalid.");
    }
    return {
        isValid: errors.length === 0,
        errors,
        fieldErrors
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/operations/service-agreement/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceAgreementPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$CustomerForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/service-agreement/CustomerForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$PlanForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/service-agreement/PlanForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$PaymentForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/service-agreement/PaymentForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$VerificationForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/service-agreement/VerificationForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$WitnessForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/service-agreement/WitnessForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$DocumentPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/service-agreement/DocumentPreview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$validation$2f$service$2d$agreement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/validation/service-agreement.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const initialData = {
    agreementNumber: "",
    customerName: "",
    customerAge: "",
    customerDateOfBirth: "",
    customerAadharLastFour: "",
    fullAddressCustomer: "",
    customerPhone: "",
    customerMail: "",
    customerPlace: "",
    customerDate: "",
    payerName: "",
    relationship: "",
    planName: "",
    planNumber: "",
    issueDate: "",
    validityDate: "",
    feesWithoutTax: "",
    tax: "",
    totalPayable: "",
    utr: "",
    paymentDate: "",
    paymentTime: "",
    paymentMode: "",
    payee: "",
    language: "",
    agentName: "",
    callDate: "",
    callTime: "",
    verifierName: "",
    acceptanceDate: "",
    acceptanceTime: "",
    documentSent: "",
    sentDate: "",
    sentTime: "",
    typeOfSendingPlatform: "",
    witness1Name: "",
    witness1Address: "",
    witness1Mobile: "",
    witness1Date: "",
    witness2Name: "",
    witness2Address: "",
    witness2Mobile: "",
    witness2Date: "",
    effectiveDate: "",
    executionDate: "",
    executionTime: "",
    executionAmPm: "",
    currentDate: ""
};
function calculateTotal(feesWithoutTax, tax) {
    const fees = Number(feesWithoutTax) || 0;
    const taxAmount = Number(tax) || 0;
    if (!fees && !taxAmount) {
        return "";
    }
    return (fees + taxAmount).toFixed(2);
}
function ServiceAgreementPage() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData);
    const [showDocumentPreview, setShowDocumentPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pdfUrl, setPdfUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pdfBlob, setPdfBlob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isGeneratingPreview, setIsGeneratingPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fieldErrors, setFieldErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    /*
   * Bumped on every failed submit so the effect below re-runs
   * even when the same fields fail twice in a row.
   */ const [invalidFocusToken, setInvalidFocusToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDownloaded, setIsDownloaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const totalPayable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ServiceAgreementPage.useMemo[totalPayable]": ()=>calculateTotal(data.feesWithoutTax, data.tax)
    }["ServiceAgreementPage.useMemo[totalPayable]"], [
        data.feesWithoutTax,
        data.tax
    ]);
    const invalidFieldMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ServiceAgreementPage.useMemo[invalidFieldMessages]": ()=>Object.values(fieldErrors).filter(Boolean)
    }["ServiceAgreementPage.useMemo[invalidFieldMessages]"], [
        fieldErrors
    ]);
    /*
   * ---------------------------------------------------------
   * CLEANUP PDF OBJECT URL
   * ---------------------------------------------------------
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceAgreementPage.useEffect": ()=>{
            return ({
                "ServiceAgreementPage.useEffect": ()=>{
                    if (pdfUrl) {
                        URL.revokeObjectURL(pdfUrl);
                    }
                }
            })["ServiceAgreementPage.useEffect"];
        }
    }["ServiceAgreementPage.useEffect"], [
        pdfUrl
    ]);
    /*
   * ---------------------------------------------------------
   * JUMP TO THE FIRST MISSING FIELD
   *
   * The highlighted field can be far below the fold, so the
   * first one is scrolled into view and focused. The DOM is
   * queried instead of the error object so the operator is
   * always taken to the first field in visual order.
   * ---------------------------------------------------------
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceAgreementPage.useEffect": ()=>{
            if (!invalidFocusToken) {
                return;
            }
            const firstInvalid = document.querySelector('[aria-invalid="true"]');
            if (!firstInvalid) {
                return;
            }
            firstInvalid.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
            firstInvalid.focus({
                preventScroll: true
            });
        }
    }["ServiceAgreementPage.useEffect"], [
        invalidFocusToken
    ]);
    /*
   * ---------------------------------------------------------
   * UPDATE FORM DATA
   *
   * Any change after preview invalidates the old PDF.
   * This prevents downloading a PDF generated from old data.
   * ---------------------------------------------------------
   */ const handleDataChange = (fieldOrUpdatedData, value)=>{
        const changedFields = typeof fieldOrUpdatedData === "string" ? [
            fieldOrUpdatedData
        ] : Object.keys(fieldOrUpdatedData);
        const nextData = typeof fieldOrUpdatedData === "string" ? {
            ...data,
            [fieldOrUpdatedData]: value ?? ""
        } : {
            ...data,
            ...fieldOrUpdatedData
        };
        setData({
            ...nextData,
            totalPayable: calculateTotal(nextData.feesWithoutTax, nextData.tax)
        });
        /*
     * Clear the highlight only on the fields that were just
     * edited. The remaining ones stay red so the operator can
     * see what is still outstanding.
     */ setFieldErrors((previous)=>{
            if (!changedFields.some((field)=>previous[field])) {
                return previous;
            }
            const next = {
                ...previous
            };
            for (const field of changedFields){
                delete next[field];
            }
            /*
       * Fees and taxes feed the computed total, so correcting
       * either of them also clears the total's highlight.
       */ if (changedFields.includes("feesWithoutTax") || changedFields.includes("tax")) {
                delete next.totalPayable;
            }
            return next;
        });
        setErrorMessage("");
        setIsDownloaded(false);
        if (showDocumentPreview) {
            setShowDocumentPreview(false);
        }
        if (pdfUrl) {
            URL.revokeObjectURL(pdfUrl);
            setPdfUrl(null);
        }
        setPdfBlob(null);
    };
    /*
   * ---------------------------------------------------------
   * VALIDATION
   * ---------------------------------------------------------
   */ const validateForm = ()=>{
        const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$validation$2f$service$2d$agreement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateServiceAgreement"])({
            ...data,
            totalPayable
        });
        if (!validation.isValid) {
            setFieldErrors(validation.fieldErrors);
            const count = Object.keys(validation.fieldErrors).length;
            setErrorMessage(`${count} field${count === 1 ? "" : "s"} need${count === 1 ? "s" : ""} attention. The highlighted fields below are missing or invalid.`);
            setInvalidFocusToken((token)=>token + 1);
            return false;
        }
        setFieldErrors({});
        setErrorMessage("");
        return true;
    };
    /*
   * ---------------------------------------------------------
   * REQUEST ONE GENERATED PDF
   *
   * `highlight` asks the server for the review copy, in which
   * every value that replaced a {Placeholder} is painted
   * yellow. The copy without it is the one that gets
   * downloaded.
   * ---------------------------------------------------------
   */ const requestPdf = async (highlight)=>{
        const response = await fetch("/api/service-agreement/generate-pdf", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...data,
                totalPayable,
                highlight
            })
        });
        const contentType = response.headers.get("content-type") || "";
        if (!response.ok) {
            let message = "Unable to generate the Service Agreement preview.";
            if (contentType.includes("application/json")) {
                try {
                    const result = await response.json();
                    if (result?.message) {
                        message = result.message;
                    }
                    /*
           * The server runs the same validation, so a
           * rejection can highlight the fields too.
           */ if (result?.fieldErrors) {
                        setFieldErrors(result.fieldErrors);
                        setInvalidFocusToken((token)=>token + 1);
                    }
                } catch  {
                // Keep the default message.
                }
            } else {
                try {
                    const text = await response.text();
                    if (text.trim()) {
                        message = text;
                    }
                } catch  {
                // Keep the default message.
                }
            }
            throw new Error(message);
        }
        if (!contentType.includes("application/pdf")) {
            throw new Error("The server did not return a PDF file.");
        }
        const blob = await response.blob();
        if (!blob.size) {
            throw new Error("The generated PDF is empty.");
        }
        return blob;
    };
    /*
   * ---------------------------------------------------------
   * GENERATE REAL PDF FOR PREVIEW
   * ---------------------------------------------------------
   */ const handlePreviewAgreement = async ()=>{
        if (isGeneratingPreview) {
            return;
        }
        const isValid = validateForm();
        if (!isValid) {
            return;
        }
        setIsGeneratingPreview(true);
        setErrorMessage("");
        setIsDownloaded(false);
        try {
            /*
       * Remove any previously generated preview.
       */ if (pdfUrl) {
                URL.revokeObjectURL(pdfUrl);
                setPdfUrl(null);
            }
            setPdfBlob(null);
            /*
       * Generate the ACTUAL final PDF, twice.
       *
       * Both copies come from the same backend route and the
       * same data, in the same moment:
       *
       * - the review copy, with the filled values in yellow,
       *   is what the operator inspects on screen
       * - the clean copy is kept in memory and is what the
       *   Confirm & Download button hands over
       *
       * They are requested in parallel so the clean copy is
       * ready the instant the operator confirms, without
       * re-generating anything from possibly changed data.
       */ const [reviewBlob, cleanBlob] = await Promise.all([
                requestPdf(true),
                requestPdf(false)
            ]);
            const objectUrl = URL.createObjectURL(reviewBlob);
            setPdfBlob(cleanBlob);
            setPdfUrl(objectUrl);
            setShowDocumentPreview(true);
        } catch (error) {
            console.error("[Service Agreement] Preview generation failed:", error);
            setShowDocumentPreview(false);
            setErrorMessage(error instanceof Error ? error.message : "Unable to generate the Service Agreement preview.");
        } finally{
            setIsGeneratingPreview(false);
        }
    };
    /*
   * ---------------------------------------------------------
   * BACK TO EDIT
   * ---------------------------------------------------------
   */ const handleBackToEdit = ()=>{
        setShowDocumentPreview(false);
        setIsDownloaded(false);
        setErrorMessage("");
    /*
     * Keep the generated PDF in memory while editing.
     *
     * It will automatically be invalidated as soon as
     * any form field is changed through handleDataChange().
     */ };
    /*
   * ---------------------------------------------------------
   * FINAL DOWNLOAD
   *
   * IMPORTANT:
   * Do NOT call the API again.
   *
   * pdfBlob already holds the clean copy generated alongside
   * the review copy, so what is downloaded carries no review
   * highlighting and matches the data that was inspected.
   * ---------------------------------------------------------
   */ const handleConfirmAndDownload = ()=>{
        if (!pdfBlob || !pdfUrl) {
            setErrorMessage("No generated PDF is available. Please generate the preview again.");
            return;
        }
        const safeAgreementNumber = data.agreementNumber.replace(/[^a-zA-Z0-9_-]/g, "_").trim() || "service-agreement";
        const downloadUrl = URL.createObjectURL(pdfBlob);
        const anchor = document.createElement("a");
        anchor.href = downloadUrl;
        anchor.download = `${safeAgreementNumber}.pdf`;
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
        URL.revokeObjectURL(downloadUrl);
        setIsDownloaded(true);
    };
    /*
   * ---------------------------------------------------------
   * FORM VIEW
   * ---------------------------------------------------------
   */ if (!showDocumentPreview) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-600",
                                            children: "Operations"
                                        }, void 0, false, {
                                            fileName: "[project]/app/operations/service-agreement/page.tsx",
                                            lineNumber: 512,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold text-gray-950 sm:text-3xl",
                                            children: "Service Agreement"
                                        }, void 0, false, {
                                            fileName: "[project]/app/operations/service-agreement/page.tsx",
                                            lineNumber: 516,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-gray-500",
                                            children: "Complete the agreement information and review the actual generated document before downloading."
                                        }, void 0, false, {
                                            fileName: "[project]/app/operations/service-agreement/page.tsx",
                                            lineNumber: 520,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/operations/service-agreement/page.tsx",
                                    lineNumber: 511,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl bg-emerald-50 px-4 py-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-bold uppercase tracking-wide text-emerald-600",
                                            children: "Current Agreement"
                                        }, void 0, false, {
                                            fileName: "[project]/app/operations/service-agreement/page.tsx",
                                            lineNumber: 527,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm font-bold text-emerald-800",
                                            children: data.agreementNumber.trim() || "Not assigned"
                                        }, void 0, false, {
                                            fileName: "[project]/app/operations/service-agreement/page.tsx",
                                            lineNumber: 531,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/operations/service-agreement/page.tsx",
                                    lineNumber: 526,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/operations/service-agreement/page.tsx",
                            lineNumber: 510,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/operations/service-agreement/page.tsx",
                        lineNumber: 509,
                        columnNumber: 11
                    }, this),
                    errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-5 rounded-xl border border-red-200 bg-red-50 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-red-800",
                                children: errorMessage
                            }, void 0, false, {
                                fileName: "[project]/app/operations/service-agreement/page.tsx",
                                lineNumber: 541,
                                columnNumber: 15
                            }, this),
                            invalidFieldMessages.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-2 max-h-48 list-disc space-y-1 overflow-y-auto pl-5 text-xs text-red-700",
                                children: invalidFieldMessages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: message
                                    }, message, false, {
                                        fileName: "[project]/app/operations/service-agreement/page.tsx",
                                        lineNumber: 548,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/operations/service-agreement/page.tsx",
                                lineNumber: 546,
                                columnNumber: 17
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/operations/service-agreement/page.tsx",
                        lineNumber: 540,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$CustomerForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                data: data,
                                onChange: handleDataChange,
                                errors: fieldErrors
                            }, void 0, false, {
                                fileName: "[project]/app/operations/service-agreement/page.tsx",
                                lineNumber: 557,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$PlanForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                data: data,
                                onChange: handleDataChange,
                                errors: fieldErrors
                            }, void 0, false, {
                                fileName: "[project]/app/operations/service-agreement/page.tsx",
                                lineNumber: 563,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$PaymentForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                data: data,
                                onChange: handleDataChange,
                                errors: fieldErrors
                            }, void 0, false, {
                                fileName: "[project]/app/operations/service-agreement/page.tsx",
                                lineNumber: 569,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$VerificationForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                data: data,
                                onChange: handleDataChange,
                                errors: fieldErrors
                            }, void 0, false, {
                                fileName: "[project]/app/operations/service-agreement/page.tsx",
                                lineNumber: 575,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$WitnessForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                data: data,
                                onChange: handleDataChange,
                                errors: fieldErrors
                            }, void 0, false, {
                                fileName: "[project]/app/operations/service-agreement/page.tsx",
                                lineNumber: 581,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm sm:p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-base font-bold text-gray-950",
                                                        children: "Ready to Review?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/operations/service-agreement/page.tsx",
                                                        lineNumber: 591,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 max-w-2xl text-sm leading-6 text-gray-500",
                                                        children: "Click Preview Agreement to generate the actual Service Agreement PDF from the master DOCX template. You can then inspect the complete document before downloading it."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/operations/service-agreement/page.tsx",
                                                        lineNumber: 595,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/operations/service-agreement/page.tsx",
                                                lineNumber: 590,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handlePreviewAgreement,
                                                disabled: isGeneratingPreview,
                                                className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60",
                                                children: isGeneratingPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/operations/service-agreement/page.tsx",
                                                            lineNumber: 610,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Generating Preview..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/operations/service-agreement/page.tsx",
                                                    lineNumber: 609,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-base",
                                                            children: "◉"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/operations/service-agreement/page.tsx",
                                                            lineNumber: 615,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Preview Agreement"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/operations/service-agreement/page.tsx",
                                                    lineNumber: 614,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/operations/service-agreement/page.tsx",
                                                lineNumber: 602,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/operations/service-agreement/page.tsx",
                                        lineNumber: 589,
                                        columnNumber: 15
                                    }, this),
                                    invalidFieldMessages.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 rounded-xl border border-red-200 bg-red-50 p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold text-red-800",
                                            children: [
                                                invalidFieldMessages.length,
                                                " highlighted field",
                                                invalidFieldMessages.length === 1 ? "" : "s",
                                                " above still need to be corrected."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/operations/service-agreement/page.tsx",
                                            lineNumber: 624,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/operations/service-agreement/page.tsx",
                                        lineNumber: 623,
                                        columnNumber: 17
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/operations/service-agreement/page.tsx",
                                lineNumber: 588,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/operations/service-agreement/page.tsx",
                        lineNumber: 556,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/operations/service-agreement/page.tsx",
                lineNumber: 507,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/operations/service-agreement/page.tsx",
            lineNumber: 506,
            columnNumber: 7
        }, this);
    }
    /*
   * ---------------------------------------------------------
   * ACTUAL PDF PREVIEW VIEW
   * ---------------------------------------------------------
   */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gray-100 px-3 py-4 sm:px-5 sm:py-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1500px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 rounded-xl border border-amber-200 bg-amber-50 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-amber-900",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mr-2 rounded bg-yellow-300 px-1.5 py-0.5 font-semibold text-amber-950",
                                children: "Highlighted"
                            }, void 0, false, {
                                fileName: "[project]/app/operations/service-agreement/page.tsx",
                                lineNumber: 649,
                                columnNumber: 13
                            }, this),
                            "Everything marked yellow is a value taken from the form. It is a review aid only. Use the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Confirm & Download"
                            }, void 0, false, {
                                fileName: "[project]/app/operations/service-agreement/page.tsx",
                                lineNumber: 653,
                                columnNumber: 38
                            }, this),
                            " ",
                            "button below to save the agreement — that copy is clean, with no highlighting."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/operations/service-agreement/page.tsx",
                        lineNumber: 648,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/operations/service-agreement/page.tsx",
                    lineNumber: 647,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$DocumentPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    data: data,
                    pdfUrl: pdfUrl,
                    isGenerating: isGeneratingPreview,
                    isDownloaded: isDownloaded,
                    onBackToEdit: handleBackToEdit,
                    onConfirmAndDownload: handleConfirmAndDownload
                }, void 0, false, {
                    fileName: "[project]/app/operations/service-agreement/page.tsx",
                    lineNumber: 659,
                    columnNumber: 9
                }, this),
                errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 rounded-xl border border-red-200 bg-red-50 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-red-800",
                        children: errorMessage
                    }, void 0, false, {
                        fileName: "[project]/app/operations/service-agreement/page.tsx",
                        lineNumber: 670,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/operations/service-agreement/page.tsx",
                    lineNumber: 669,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/app/operations/service-agreement/page.tsx",
            lineNumber: 646,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/operations/service-agreement/page.tsx",
        lineNumber: 645,
        columnNumber: 5
    }, this);
}
_s(ServiceAgreementPage, "qrSmhCqfykZnxVX3HX1JiOhnqRI=");
_c = ServiceAgreementPage;
var _c;
__turbopack_context__.k.register(_c, "ServiceAgreementPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_128v6t4._.js.map