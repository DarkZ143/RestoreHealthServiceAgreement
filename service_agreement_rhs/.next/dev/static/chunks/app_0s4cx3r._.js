(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/service-agreement/CustomerForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomerForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function CustomerForm({ data, onChange }) {
    const handleChange = (field)=>(event)=>{
            onChange(field, event.target.value);
        };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 gap-5 md:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "agreementNumber",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Agreement Number"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "agreementNumber",
                        type: "text",
                        value: data.agreementNumber,
                        onChange: handleChange("agreementNumber"),
                        placeholder: "Enter agreement number",
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900 "
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "customerName",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Customer Name"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "customerName",
                        type: "text",
                        value: data.customerName,
                        onChange: handleChange("customerName"),
                        placeholder: "Enter customer name",
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "customerAge",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Customer Age"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "customerAge",
                        type: "number",
                        min: "18",
                        value: data.customerAge,
                        onChange: handleChange("customerAge"),
                        placeholder: "Enter customer age",
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "customerDateOfBirth",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Date of Birth"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "customerDateOfBirth",
                        type: "date",
                        value: data.customerDateOfBirth,
                        onChange: handleChange("customerDateOfBirth"),
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "customerAadharLastFour",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Aadhaar Last 4 Digits"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "customerAadharLastFour",
                        type: "text",
                        inputMode: "numeric",
                        maxLength: 4,
                        value: data.customerAadharLastFour,
                        onChange: handleChange("customerAadharLastFour"),
                        placeholder: "XXXX",
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "customerPhone",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Mobile Number"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "customerPhone",
                        type: "tel",
                        inputMode: "numeric",
                        value: data.customerPhone,
                        onChange: handleChange("customerPhone"),
                        placeholder: "Enter 10-digit mobile number",
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "customerMail",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Email Address"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "customerMail",
                        type: "email",
                        value: data.customerMail,
                        onChange: handleChange("customerMail"),
                        placeholder: "customer@example.com",
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "customerPlace",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Customer Place"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "customerPlace",
                        type: "text",
                        value: data.customerPlace,
                        onChange: handleChange("customerPlace"),
                        placeholder: "Enter place",
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "customerDate",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Customer Date"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "customerDate",
                        type: "date",
                        value: data.customerDate,
                        onChange: handleChange("customerDate"),
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:col-span-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "fullAddressCustomer",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Full Residential Address"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "fullAddressCustomer",
                        value: data.fullAddressCustomer,
                        onChange: (event)=>onChange("fullAddressCustomer", event.target.value),
                        placeholder: "Enter complete residential address",
                        rows: 3,
                        className: "w-full resize-y rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "payerName",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Payer Name"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "payerName",
                        type: "text",
                        value: data.payerName,
                        onChange: handleChange("payerName"),
                        placeholder: "Enter payer name",
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "relationship",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Relationship"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "relationship",
                        type: "text",
                        value: data.relationship,
                        onChange: handleChange("relationship"),
                        placeholder: "e.g. Father, Mother, Spouse",
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/service-agreement/CustomerForm.tsx",
        lineNumber: 20,
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
                                    }, this) : pdfUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        src: pdfUrl,
                                        title: "Service Agreement PDF Preview",
                                        className: "h-[75vh] min-h-[700px] w-full border-0"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 767,
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
                                                            lineNumber: 783,
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
                                                            lineNumber: 791,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M9 13H15",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.7",
                                                            strokeLinecap: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                            lineNumber: 799,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M9 17H15",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.7",
                                                            strokeLinecap: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                            lineNumber: 806,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                    lineNumber: 775,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                lineNumber: 774,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-base font-bold text-gray-900",
                                                children: "PDF preview will appear here"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                lineNumber: 815,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 max-w-md text-sm leading-6 text-gray-500",
                                                children: "Generate the agreement to load the actual master-template PDF for review."
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                lineNumber: 819,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 773,
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
                                    lineNumber: 831,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                lineNumber: 830,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                            lineNumber: 829,
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
                                    lineNumber: 841,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-bold text-amber-900",
                                            children: "Final Review Before PDF Confirmation"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                            lineNumber: 846,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-xs leading-5 text-amber-800",
                                            children: "Please verify the customer, payer, plan, payment, verification, acceptance, document delivery and execution information carefully. The final PDF is generated from the master Service Agreement DOCX template while preserving the template's existing document structure and formatting."
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                            lineNumber: 850,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                    lineNumber: 845,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                            lineNumber: 840,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                        lineNumber: 839,
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
                                            lineNumber: 865,
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
                                            lineNumber: 869,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                    lineNumber: 864,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `rounded-full px-3 py-1.5 text-xs font-semibold ${status.isComplete ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`,
                                    children: status.isComplete ? "Review Complete" : `${status.remaining} Field${status.remaining === 1 ? "" : "s"} Remaining`
                                }, void 0, false, {
                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                    lineNumber: 874,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                            lineNumber: 863,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                        lineNumber: 862,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                lineNumber: 838,
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
                                        lineNumber: 897,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 text-xs text-gray-500",
                                        children: "The generated agreement has been downloaded."
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 901,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                lineNumber: 896,
                                columnNumber: 15
                            }, this) : pdfUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-gray-900",
                                        children: "Agreement PDF is ready"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 907,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 text-xs text-gray-500",
                                        children: "Review the PDF and information panel before downloading."
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
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-gray-900",
                                        children: "Agreement review"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 917,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 text-xs text-gray-500",
                                        children: "Generate the PDF to view the actual document."
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
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                            lineNumber: 894,
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
                                    lineNumber: 929,
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
                                                lineNumber: 946,
                                                columnNumber: 19
                                            }, this),
                                            "Downloaded"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 945,
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
                                                        lineNumber: 959,
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
                                                        lineNumber: 967,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M5 21H19",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                        lineNumber: 975,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                                lineNumber: 951,
                                                columnNumber: 19
                                            }, this),
                                            "Confirm & Download PDF"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                        lineNumber: 950,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                                    lineNumber: 938,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                            lineNumber: 928,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                    lineNumber: 893,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/service-agreement/DocumentPreview.tsx",
                lineNumber: 892,
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
"[project]/app/components/service-agreement/PaymentForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PaymentForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function PaymentForm({ data, onChange }) {
    const handleChange = (field)=>(event)=>{
            onChange(field, event.target.value);
        };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 gap-5 md:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "utr",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Payment Reference / UTR"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "utr",
                        type: "text",
                        value: data.utr,
                        onChange: handleChange("utr"),
                        placeholder: "Enter payment reference / UTR",
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "paymentDate",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Payment Date"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "paymentDate",
                        type: "date",
                        value: data.paymentDate,
                        onChange: handleChange("paymentDate"),
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "paymentTime",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Payment Time"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "paymentTime",
                        type: "time",
                        value: data.paymentTime,
                        onChange: handleChange("paymentTime"),
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "paymentMode",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Payment Mode"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "paymentMode",
                        value: data.paymentMode,
                        onChange: handleChange("paymentMode"),
                        className: "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Select payment mode"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "UPI",
                                children: "UPI"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "NEFT",
                                children: "NEFT"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "RTGS",
                                children: "RTGS"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "IMPS",
                                children: "IMPS"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Bank Transfer",
                                children: "Bank Transfer"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Debit Card",
                                children: "Debit Card"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Credit Card",
                                children: "Credit Card"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Other",
                                children: "Other"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:col-span-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "payee",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Payee"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "payee",
                        type: "text",
                        value: data.payee,
                        onChange: handleChange("payee"),
                        placeholder: "Enter payee name",
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1.5 text-xs text-gray-500",
                        children: "Enter the payee exactly as applicable to the official payment record."
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/service-agreement/PaymentForm.tsx",
        lineNumber: 20,
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
"use client";
;
function PlanForm({ data, onChange }) {
    const handleChange = (field)=>(event)=>{
            onChange(field, event.target.value);
        };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 gap-5 md:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "planName",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Plan Name"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "planName",
                        type: "text",
                        value: data.planName,
                        onChange: handleChange("planName"),
                        placeholder: "Enter plan name",
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "planNumber",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Plan Number"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "planNumber",
                        type: "text",
                        value: data.planNumber,
                        onChange: handleChange("planNumber"),
                        placeholder: "Enter plan number",
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "issueDate",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Issue Date"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "issueDate",
                        type: "date",
                        value: data.issueDate,
                        onChange: handleChange("issueDate"),
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "validityDate",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Validity Date"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "validityDate",
                        type: "date",
                        value: data.validityDate,
                        onChange: handleChange("validityDate"),
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "feesWithoutTax",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Fees (Excluding Taxes)"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500",
                                children: "₹"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "feesWithoutTax",
                                type: "number",
                                min: "0",
                                step: "0.01",
                                value: data.feesWithoutTax,
                                onChange: handleChange("feesWithoutTax"),
                                placeholder: "0.00",
                                className: "w-full rounded-lg border border-gray-300 py-2.5 pl-8 pr-3 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "tax",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Taxes"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500",
                                children: "₹"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "tax",
                                type: "number",
                                min: "0",
                                step: "0.01",
                                value: data.tax,
                                onChange: handleChange("tax"),
                                placeholder: "0.00",
                                className: "w-full rounded-lg border border-gray-300 py-2.5 pl-8 pr-3 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:col-span-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "totalPayable",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Total Amount Payable"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500",
                                children: "₹"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "totalPayable",
                                type: "number",
                                min: "0",
                                step: "0.01",
                                value: data.totalPayable,
                                onChange: handleChange("totalPayable"),
                                placeholder: "0.00",
                                className: "w-full rounded-lg border border-gray-300 py-2.5 pl-8 pr-3 text-sm font-medium outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1.5 text-xs text-gray-500",
                        children: "Total amount payable can be calculated from Fees + Taxes."
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/service-agreement/PlanForm.tsx",
        lineNumber: 20,
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
"use client";
;
function VerificationForm({ data, onChange }) {
    const handleChange = (field)=>(event)=>{
            onChange(field, event.target.value);
        };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 gap-5 md:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "language",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Language of Explanation"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "language",
                        type: "text",
                        value: data.language,
                        onChange: handleChange("language"),
                        placeholder: "e.g. Hindi, English",
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "agentName",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Agent / Authorized Representative"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "agentName",
                        type: "text",
                        value: data.agentName,
                        onChange: handleChange("agentName"),
                        placeholder: "Enter agent name",
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "callDate",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Welcome / Verification Call Date"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "callDate",
                        type: "date",
                        value: data.callDate,
                        onChange: handleChange("callDate"),
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "callTime",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Welcome / Verification Call Time"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "callTime",
                        type: "time",
                        value: data.callTime,
                        onChange: handleChange("callTime"),
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:col-span-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "verifierName",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Verifier Name"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "verifierName",
                        type: "text",
                        value: data.verifierName,
                        onChange: handleChange("verifierName"),
                        placeholder: "Enter verifier name",
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "acceptanceDate",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Acceptance Date"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "acceptanceDate",
                        type: "date",
                        value: data.acceptanceDate,
                        onChange: handleChange("acceptanceDate"),
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "acceptanceTime",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Acceptance Time"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "acceptanceTime",
                        type: "time",
                        value: data.acceptanceTime,
                        onChange: handleChange("acceptanceTime"),
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "documentSent",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Documents Sent"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "documentSent",
                        value: data.documentSent,
                        onChange: handleChange("documentSent"),
                        className: "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Select option"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Yes",
                                children: "Yes"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "No",
                                children: "No"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "typeOfSendingPlatform",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Type of Sending Platform"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "typeOfSendingPlatform",
                        value: data.typeOfSendingPlatform,
                        onChange: handleChange("typeOfSendingPlatform"),
                        className: "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Select platform"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Email",
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "WhatsApp",
                                children: "WhatsApp"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Email & WhatsApp",
                                children: "Email & WhatsApp"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Physical Copy",
                                children: "Physical Copy"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Other",
                                children: "Other"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "sentDate",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Document Sent Date"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "sentDate",
                        type: "date",
                        value: data.sentDate,
                        onChange: handleChange("sentDate"),
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "sentTime",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Document Sent Time"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "sentTime",
                        type: "time",
                        value: data.sentTime,
                        onChange: handleChange("sentTime"),
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "effectiveDate",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Effective Date"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "effectiveDate",
                        type: "date",
                        value: data.effectiveDate,
                        onChange: handleChange("effectiveDate"),
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "executionDate",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Execution / Signing Date"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "executionDate",
                        type: "date",
                        value: data.executionDate,
                        onChange: handleChange("executionDate"),
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "executionTime",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Execution / Signing Time"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "executionTime",
                        type: "time",
                        value: data.executionTime,
                        onChange: handleChange("executionTime"),
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "executionAmPm",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "AM / PM"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "executionAmPm",
                        value: data.executionAmPm,
                        onChange: handleChange("executionAmPm"),
                        className: "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Select"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "AM",
                                children: "AM"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "PM",
                                children: "PM"
                            }, void 0, false, {
                                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "currentDate",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Current / Document Date"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "currentDate",
                        type: "date",
                        value: data.currentDate,
                        onChange: handleChange("currentDate"),
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/service-agreement/VerificationForm.tsx",
        lineNumber: 23,
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
"use client";
;
function WitnessForm({ data, onChange }) {
    const handleChange = (field)=>(event)=>{
            onChange(field, event.target.value);
        };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 gap-5 md:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "witness1Name",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Witness 1 Name (optional)"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "witness1Name",
                        type: "text",
                        value: data.witness1Name,
                        onChange: handleChange("witness1Name"),
                        placeholder: "Enter witness 1 full name",
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "witness2Name",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Witness 2 Name (optional)"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "witness2Name",
                        type: "text",
                        value: data.witness2Name,
                        onChange: handleChange("witness2Name"),
                        placeholder: "Enter witness 2 full name",
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "witness1Address",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Witness 1 Address (optional)"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "witness1Address",
                        value: data.witness1Address,
                        onChange: (event)=>onChange("witness1Address", event.target.value),
                        placeholder: "Enter witness 1 address",
                        rows: 3,
                        className: "w-full resize-y rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "witness2Address",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Witness 2 Address (optional)"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "witness2Address",
                        value: data.witness2Address,
                        onChange: (event)=>onChange("witness2Address", event.target.value),
                        placeholder: "Enter witness 2 address",
                        rows: 3,
                        className: "w-full resize-y rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "witness1Mobile",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Witness 1 Mobile Number (optional)"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "witness1Mobile",
                        type: "tel",
                        inputMode: "numeric",
                        maxLength: 10,
                        value: data.witness1Mobile,
                        onChange: handleChange("witness1Mobile"),
                        placeholder: "10-digit mobile number",
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "witness2Mobile",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Witness 2 Mobile Number (optional)"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "witness2Mobile",
                        type: "tel",
                        inputMode: "numeric",
                        maxLength: 10,
                        value: data.witness2Mobile,
                        onChange: handleChange("witness2Mobile"),
                        placeholder: "10-digit mobile number",
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "witness1Date",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Witness 1 Date (optional)"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "witness1Date",
                        type: "date",
                        value: data.witness1Date,
                        onChange: handleChange("witness1Date"),
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "witness2Date",
                        className: "mb-1.5 block text-sm font-medium text-gray-700",
                        children: "Witness 2 Date (optional)"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "witness2Date",
                        type: "date",
                        value: data.witness2Date,
                        onChange: handleChange("witness2Date"),
                        className: "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/service-agreement/WitnessForm.tsx",
        lineNumber: 27,
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
    const [validationErrors, setValidationErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isDownloaded, setIsDownloaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const totalPayable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ServiceAgreementPage.useMemo[totalPayable]": ()=>calculateTotal(data.feesWithoutTax, data.tax)
    }["ServiceAgreementPage.useMemo[totalPayable]"], [
        data.feesWithoutTax,
        data.tax
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
   * UPDATE FORM DATA
   *
   * Any change after preview invalidates the old PDF.
   * This prevents downloading a PDF generated from old data.
   * ---------------------------------------------------------
   */ const handleDataChange = (fieldOrUpdatedData, value)=>{
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
        setValidationErrors({});
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
   */ const normalizeValidationErrors = (errors)=>errors.reduce((acc, error, index)=>{
            acc[`error_${index}`] = error;
            return acc;
        }, {});
    const validateForm = ()=>{
        const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$validation$2f$service$2d$agreement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateServiceAgreement"])(data);
        if (!validation.isValid) {
            setValidationErrors(normalizeValidationErrors(validation.errors));
            setErrorMessage("Please correct the highlighted information before generating the preview.");
            return false;
        }
        setValidationErrors({});
        setErrorMessage("");
        return true;
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
       * Generate the ACTUAL final PDF.
       *
       * This uses the same backend route that generates
       * the final Service Agreement from the master DOCX.
       */ const response = await fetch("/api/service-agreement/generate-pdf", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...data,
                    totalPayable
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
                        if (result?.errors) {
                            setValidationErrors(result.errors);
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
            const objectUrl = URL.createObjectURL(blob);
            setPdfBlob(blob);
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
   * The preview PDF is already the final generated PDF.
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
                                            lineNumber: 398,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold text-gray-950 sm:text-3xl",
                                            children: "Service Agreement"
                                        }, void 0, false, {
                                            fileName: "[project]/app/operations/service-agreement/page.tsx",
                                            lineNumber: 402,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-gray-500",
                                            children: "Complete the agreement information and review the actual generated document before downloading."
                                        }, void 0, false, {
                                            fileName: "[project]/app/operations/service-agreement/page.tsx",
                                            lineNumber: 406,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/operations/service-agreement/page.tsx",
                                    lineNumber: 397,
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
                                            lineNumber: 413,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm font-bold text-emerald-800",
                                            children: data.agreementNumber.trim() || "Not assigned"
                                        }, void 0, false, {
                                            fileName: "[project]/app/operations/service-agreement/page.tsx",
                                            lineNumber: 417,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/operations/service-agreement/page.tsx",
                                    lineNumber: 412,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/operations/service-agreement/page.tsx",
                            lineNumber: 396,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/operations/service-agreement/page.tsx",
                        lineNumber: 395,
                        columnNumber: 11
                    }, this),
                    errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-5 rounded-xl border border-red-200 bg-red-50 p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-red-800",
                            children: errorMessage
                        }, void 0, false, {
                            fileName: "[project]/app/operations/service-agreement/page.tsx",
                            lineNumber: 427,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/operations/service-agreement/page.tsx",
                        lineNumber: 426,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$CustomerForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                data: data,
                                onChange: handleDataChange
                            }, void 0, false, {
                                fileName: "[project]/app/operations/service-agreement/page.tsx",
                                lineNumber: 435,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$PlanForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                data: data,
                                onChange: handleDataChange
                            }, void 0, false, {
                                fileName: "[project]/app/operations/service-agreement/page.tsx",
                                lineNumber: 437,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$PaymentForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                data: data,
                                onChange: handleDataChange
                            }, void 0, false, {
                                fileName: "[project]/app/operations/service-agreement/page.tsx",
                                lineNumber: 439,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$VerificationForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                data: data,
                                onChange: handleDataChange
                            }, void 0, false, {
                                fileName: "[project]/app/operations/service-agreement/page.tsx",
                                lineNumber: 441,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$WitnessForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                data: data,
                                onChange: handleDataChange
                            }, void 0, false, {
                                fileName: "[project]/app/operations/service-agreement/page.tsx",
                                lineNumber: 443,
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
                                                        lineNumber: 449,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 max-w-2xl text-sm leading-6 text-gray-500",
                                                        children: "Click Preview Agreement to generate the actual Service Agreement PDF from the master DOCX template. You can then inspect the complete document before downloading it."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/operations/service-agreement/page.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/operations/service-agreement/page.tsx",
                                                lineNumber: 448,
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
                                                            lineNumber: 468,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Generating Preview..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/operations/service-agreement/page.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-base",
                                                            children: "◉"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/operations/service-agreement/page.tsx",
                                                            lineNumber: 473,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Preview Agreement"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/operations/service-agreement/page.tsx",
                                                    lineNumber: 472,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/operations/service-agreement/page.tsx",
                                                lineNumber: 460,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/operations/service-agreement/page.tsx",
                                        lineNumber: 447,
                                        columnNumber: 15
                                    }, this),
                                    Object.keys(validationErrors).length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold text-amber-900",
                                            children: "Some required information is missing or invalid. Please review the form above."
                                        }, void 0, false, {
                                            fileName: "[project]/app/operations/service-agreement/page.tsx",
                                            lineNumber: 482,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/operations/service-agreement/page.tsx",
                                        lineNumber: 481,
                                        columnNumber: 17
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/operations/service-agreement/page.tsx",
                                lineNumber: 446,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/operations/service-agreement/page.tsx",
                        lineNumber: 434,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/operations/service-agreement/page.tsx",
                lineNumber: 393,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/operations/service-agreement/page.tsx",
            lineNumber: 392,
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2d$agreement$2f$DocumentPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    data: data,
                    pdfUrl: pdfUrl,
                    isGenerating: isGeneratingPreview,
                    isDownloaded: isDownloaded,
                    onBackToEdit: handleBackToEdit,
                    onConfirmAndDownload: handleConfirmAndDownload
                }, void 0, false, {
                    fileName: "[project]/app/operations/service-agreement/page.tsx",
                    lineNumber: 504,
                    columnNumber: 9
                }, this),
                errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 rounded-xl border border-red-200 bg-red-50 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-red-800",
                        children: errorMessage
                    }, void 0, false, {
                        fileName: "[project]/app/operations/service-agreement/page.tsx",
                        lineNumber: 515,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/operations/service-agreement/page.tsx",
                    lineNumber: 514,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/app/operations/service-agreement/page.tsx",
            lineNumber: 503,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/operations/service-agreement/page.tsx",
        lineNumber: 502,
        columnNumber: 5
    }, this);
}
_s(ServiceAgreementPage, "vcuWZPv/DNfEeE2ASthmSMSEiy0=");
_c = ServiceAgreementPage;
var _c;
__turbopack_context__.k.register(_c, "ServiceAgreementPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_0s4cx3r._.js.map