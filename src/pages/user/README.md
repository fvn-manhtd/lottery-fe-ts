## User Card Page Flow

Open page card -> check pay_customer_id from redux

    If ok
        Call api get card list

            If ok -> add to state redux

            If fail -> show error message

    If fail
        Call api register payjp customer id

            If ok -> add to state redux

            If fail -> remove from state

Add card flow

    Call api add card

        If ok -> add card list to redux

        If fail -> show error message
