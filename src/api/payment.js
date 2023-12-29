import "https://js.tosspayments.com/v1/payment-widget";

export default function Payment() {
  const clientKey = "test_ck_Z1aOwX7K8myd2yN5yn2B8yQxzvNP";
  const customerKey = "OY_JZVIxik4fB8WDUXgU2"; // 내 상점에서 고객을 구분하기 위해 발급한 고객의 고유 ID
  const coupon = document.getElementById("coupon-box");
  const button = document.getElementById("payment-button");

  // ------  결제위젯 초기화 ------
  // 비회원 결제에는 customerKey 대신 ANONYMOUS를 사용하세요.
  const paymentWidget = PaymentWidget(clientKey, customerKey); // 회원 결제
  // const paymentWidget = PaymentWidget(clientKey, PaymentWidget.ANONYMOUS) // 비회원 결제

  // ------  결제 UI 렌더링 ------
  // 결제 UI를 렌더링할 위치를 지정합니다. `#payment-method`와 같은 CSS 선택자와 결제 금액 객체를 추가하세요.
  // DOM이 생성된 이후에 렌더링 메서드를 호출하세요.
  // https://docs.tosspayments.com/reference/widget-sdk#renderpaymentmethods선택자-결제-금액-옵션
  const paymentMethodWidget = paymentWidget.renderPaymentMethods(
    "#payment-method",
    { value: 50000 },
    // 렌더링하고 싶은 결제 UI의 variantKey
    // 결제 수단 및 스타일이 다른 멀티 UI를 직접 만들고 싶다면 계약이 필요해요.
    // https://docs.tosspayments.com/guides/payment-widget/admin#멀티-결제-ui
    { variantKey: "DEFAULT" }
  );

  // ------  이용약관 UI 렌더링 ------
  // 이용약관 UI를 렌더링할 위치를 지정합니다. `#agreement`와 같은 CSS 선택자를 추가하세요.
  // https://docs.tosspayments.com/reference/widget-sdk#renderagreement선택자-옵션
  paymentWidget.renderAgreement(
    "#agreement",
    { variantKey: "AGREEMENT" } // 기본 이용약관 UI 렌더링
  );

  // ------ 금액 업데이트 ------
  // 새로운 결제 금액을 넣어주세요.
  // https://docs.tosspayments.com/reference/widget-sdk#updateamount결제-금액
  coupon.addEventListener("change", function () {
    if (coupon.checked) {
      paymentMethodWidget.updateAmount(amount - 5000);
    } else {
      paymentMethodWidget.updateAmount(amount);
    }
  });

  // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
  // 더 많은 결제 정보 파라미터는 결제위젯 SDK에서 확인하세요.
  // https://docs.tosspayments.com/reference/widget-sdk#requestpayment결제-정보
  button.addEventListener("click", function () {
    paymentWidget.requestPayment({
      orderId: "QrMsfNKIUW3vZ9hkrh8LG",
      orderName: "토스 티셔츠 외 2건",
      successUrl: window.location.origin + "/success",
      failUrl: window.location.origin + "/fail",
      customerEmail: "customer123@gmail.com",
      customerName: "김토스",
      customerMobilePhone: "01012341234",
    });
  });

  return (
    <div>
      <div id="payment-method"></div>
      <div id="agreement"></div>

      <div>
        <input type="checkbox" id="coupon-box" />
        <label for="coupon-box"> 5,000원 쿠폰 적용 </label>
      </div>

      <button id="payment-button">결제하기</button>
    </div>
  );
}
