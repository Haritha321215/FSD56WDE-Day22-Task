import PriceCard from "./PriceCard"

function App() {

  return (
    <>
      <PriceCard head1="FREE" head2="$0/month" users="Single" storage={true} uPublicPro={true} comAcs={true} uPrivatePro={false} dPhoneSup={false} freeSubDom={false} monthlyRepo={false}/>
      <PriceCard head1="PLUS" head2="$9/month" users="5" storage={true} uPublicPro={true} comAcs={true} uPrivatePro={true} dPhoneSup={true} freeSubDom={true} monthlyRepo={false}/>
      <PriceCard head1="PRO" head2="$49/month" users="Unlimited" storage={true} uPublicPro={true} comAcs={true} uPrivatePro={true} dPhoneSup={true} freeSubDom={true} monthlyRepo={true}/>
    </>
  )
}

export default App

