(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [674],
  {
    26537: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/tpadv2",
        function () {
          return n(48632);
        },
      ]);
    },
    48632: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        });
      var a = n(85893),
        i = n(67294),
        s = n(49362),
        l = n(17857),
        r = n(89583),
        u = n(50549),
        d = n(36857),
        o = n(38927),
        c = n(12717),
        p = n(95749),
        m = n(27484),
        y = n.n(m),
        f = n(35005),
        b = n(78841),
        T = n(90099),
        x = n(46661),
        h = n(57785),
        g = n(76863),
        v = n(62314);
      function j(e) {
        let { claimer: t, symbol: n } = e,
          {
            account: s,
            totalStats: l,
            userStats: r,
            isClaiming: d,
            config: o,
            claimAll: c,
            claimStakingPools: m,
            nextFeeDecreaseAt: j,
            stakingPools: w,
          } = t,
          N = (0, i.useRef)(null);
        if (!r || !l) return (0, a.jsx)(u.Z, { height: 200 });
        let A = l ? r.claimableTokens.mul(l.currentFeePercent).divn(100) : b.Aj,
          C = r.claimableTokens.sub(A),
          S =
            (null == w ? void 0 : w.filter((e) => e.amount.gtn(0)).length) > 0;
        return (0, a.jsx)("div", {
          children: (0, a.jsxs)("div", {
            className: "grid grid-cols-2 gap-x-6 gap-y-3",
            children: [
              (0, a.jsxs)(k, {
                label: "Claimed / Total",
                children: [
                  (0, v.dv)(r.claimedTokens),
                  " / ",
                  (0, v.dv)(r.tokens),
                  " ",
                  n,
                ],
              }),
              !1,
              (0, a.jsxs)(k, {
                label: "Claimable",
                children: [
                  (0, v.dv)(r.claimableTokens),
                  " ",
                  n,
                  " ",
                  r.claimableTokens.gtn(0) && l.currentFeePercent.gtn(0)
                    ? (0, a.jsxs)("span", {
                        className: "text-red-500 text-xs",
                        children: ["-", (0, v.dv)(A), " ", n, " fee"],
                      })
                    : null,
                ],
              }),
              (0, a.jsx)(k, {
                label: j
                  ? "Current Fee (5% decrease on ".concat(
                      y().unix(j).utc().format(p.DateTimeFormat.noYear),
                      ")"
                    )
                  : "Current Fee",
                children: (0, a.jsxs)("span", {
                  className: l.currentFeePercent.gtn(0)
                    ? "text-red-500"
                    : "text-green-500",
                  children: [l.currentFeePercent.toNumber(), "%"],
                }),
              }),
              (0, a.jsx)("div", {
                className: "flex items-center pt-4 col-span-2",
                children: l.currentFeePercent.gtn(0)
                  ? (0, a.jsx)(g.Vq, {
                      openButton: (e) =>
                        (0, a.jsx)(x.M, {
                          paused: r.claimableTokens.eqn(0) && l.pausedAt.gtn(0),
                          disabled: r.claimableTokens.eqn(0),
                          account: s,
                          isClaiming: d ? -1 : void 0,
                          claim: () => e(),
                          className: "w-full h-full",
                          children: "Claim",
                        }),
                      title: "Claim tokens",
                      initialFocus: N,
                      buttons: (e) => {
                        let { close: t } = e;
                        return (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(f.Z, {
                              variant: "outline-secondary",
                              className: "w-full",
                              ref: N,
                              onClick: t,
                              children: "Cancel",
                            }),
                            (0, a.jsx)(f.Z, {
                              onClick: () => c().then(h.P).then(t),
                              disabled: d,
                              className: "w-full",
                              children: "Claim",
                            }),
                          ],
                        });
                      },
                      children: (0, a.jsx)(g.Vq.Sections, {
                        children: (0, a.jsxs)(g.Vq.SectionItem, {
                          iconStatus: "warning",
                          children: [
                            (0, a.jsxs)("p", {
                              children: [
                                "The claiming fee is decreases for 5% daily. Read",
                                " ",
                                (0, a.jsx)("a", {
                                  href: "https://trustpad.medium.com/tpad-2-0-claiming-details-449d38043cf1",
                                  className: "text-white font-normal",
                                  children: "about claiming details here",
                                }),
                                ". If you claim ",
                                (0, a.jsxs)("b", {
                                  children: [(0, v.dv)(r.tokens), " TPAD"],
                                }),
                                " now:",
                              ],
                            }),
                            (0, a.jsxs)("ul", {
                              className: "list-disc list-inside",
                              children: [
                                (0, a.jsxs)("li", {
                                  children: [
                                    "you will receive ",
                                    (0, a.jsxs)("b", {
                                      children: [(0, v.dv)(C), " TPAD"],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("li", {
                                  children: [
                                    "you will",
                                    " ",
                                    (0, a.jsxs)("span", {
                                      className: "text-red-500",
                                      children: [
                                        "lose ",
                                        l.currentFeePercent.toNumber(),
                                        "%",
                                      ],
                                    }),
                                    " ",
                                    "= ",
                                    (0, a.jsxs)("b", {
                                      className: "text-red-500",
                                      children: [(0, v.dv)(A), " TPAD"],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)("p", {
                              className: "mt-4",
                              children:
                                "Are you sure you want to claim? The fee cannot be refunded once the transaction is done.",
                            }),
                          ],
                        }),
                      }),
                    })
                  : (0, a.jsx)(x.M, {
                      paused: r.claimableTokens.eqn(0) && l.pausedAt.gtn(0),
                      disabled: r.claimableTokens.eqn(0),
                      account: s,
                      isClaiming: d ? -1 : void 0,
                      claim: () => c().then(h.P),
                      className: "w-full h-full",
                      children: "Claim",
                    }),
              }),
              S &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", {
                      className: "col-span-2",
                      children: (0, a.jsxs)(k, {
                        label: "Staking Pools",
                        children: [
                          (0, a.jsx)("div", {
                            children: w
                              .filter((e) => e.amount.gtn(0))
                              .map((e, t) =>
                                (0, a.jsxs)(
                                  "span",
                                  {
                                    className: "text-sm",
                                    children: [
                                      0 !== t &&
                                        (0, a.jsx)(a.Fragment, {
                                          children: " • ",
                                        }),
                                      T.Qb.find((t) => t.address === e.pool).id,
                                      ":",
                                      " ",
                                      (0, v.dv)(e.amount),
                                      " TPAD",
                                    ],
                                  },
                                  e.pool
                                )
                              ),
                          }),
                          (0, a.jsx)("p", {
                            children:
                              "No fee applied on staking pools migration.",
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-span-2",
                      children: (0, a.jsx)(x.M, {
                        paused: l.pausedAt.gtn(0),
                        disabled: !0,
                        account: s,
                        isClaiming: d ? -1 : void 0,
                        claim: () => m().then(h.P),
                        className: "w-full h-full",
                        children: "Migrate staking pools (soon)",
                      }),
                    }),
                  ],
                }),
            ],
          }),
        });
      }
      function k(e) {
        let { label: t, children: n } = e;
        return (0, a.jsxs)("div", {
          className: "flex flex-col",
          children: [
            (0, a.jsx)("div", {
              className: "mb-2 text-sm text-secondary",
              children: t,
            }),
            (0, a.jsx)("div", {
              className:
                "flex-grow flex items-center justify-center flex-col p-3 bg-dark2 border border-gray-800 rounded-lg text-white shadow",
              children: n,
            }),
          ],
        });
      }
      var w = n(13550),
        N = n.n(w),
        A = JSON.parse(
          '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"newAccount","type":"address"}],"name":"AllocationTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"status","type":"bool"},{"indexed":false,"internalType":"uint256","name":"pausedAt","type":"uint256"}],"name":"ClaimingPaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"failedAllocation","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"existingAllocation","type":"uint256"}],"name":"DuplicateAllocationSkipped","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"allocations","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"claimedAmount","type":"uint256"},{"internalType":"uint256","name":"lastClaimTimestamp","type":"uint256"},{"internalType":"uint256","name":"burnedAmount","type":"uint256"},{"internalType":"uint256","name":"feeAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"batchAddAllocation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"lockStarts","type":"uint256[]"},{"internalType":"uint256[]","name":"rewards","type":"uint256[]"},{"internalType":"address[]","name":"pools","type":"address[]"}],"name":"batchAddStakersAllocation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fromI","type":"uint256"},{"internalType":"uint256","name":"batch","type":"uint256"}],"name":"burnUnclaimed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"claimAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"claimStakingPools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"config","outputs":[{"internalType":"uint256","name":"unitOfTime","type":"uint256"},{"internalType":"uint256","name":"initialPercent","type":"uint256"},{"internalType":"uint256","name":"initialUnlockDate","type":"uint256"},{"internalType":"uint256","name":"vestingStartDate","type":"uint256"},{"internalType":"uint256","name":"vestingDuration","type":"uint256"},{"internalType":"address","name":"feeAddress","type":"address"},{"internalType":"uint256","name":"initialFeePercent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountStats","outputs":[{"components":[{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"claimedTokens","type":"uint256"},{"internalType":"uint256","name":"claimableTokens","type":"uint256"},{"internalType":"uint256","name":"burnedTokens","type":"uint256"},{"internalType":"uint256","name":"collectedFeeTokens","type":"uint256"}],"internalType":"struct IClaimerV2.UserStats","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_unused","type":"uint256"}],"name":"getAccounts","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getStakingPoolsToMigrate","outputs":[{"components":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"lockStart","type":"uint256"},{"internalType":"uint256","name":"pendingReward","type":"uint256"},{"internalType":"bool","name":"migrated","type":"bool"}],"internalType":"struct TokenFeeBurnClaimer.StakingPool[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalStats","outputs":[{"components":[{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"claimedTokens","type":"uint256"},{"internalType":"uint256","name":"claimableTokens","type":"uint256"},{"internalType":"uint256","name":"burnedTokens","type":"uint256"},{"internalType":"uint256","name":"collectedFeeTokens","type":"uint256"},{"internalType":"uint256","name":"pausedAt","type":"uint256"},{"internalType":"uint256","name":"currentFeePercent","type":"uint256"}],"internalType":"struct IClaimerV2.TotalStats","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTransferredAccounts","outputs":[{"internalType":"address[2][]","name":"","type":"address[2][]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"id","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_id","type":"string"},{"internalType":"address","name":"_token","type":"address"},{"components":[{"internalType":"uint256","name":"unitOfTime","type":"uint256"},{"internalType":"uint256","name":"initialPercent","type":"uint256"},{"internalType":"uint256","name":"initialUnlockDate","type":"uint256"},{"internalType":"uint256","name":"vestingStartDate","type":"uint256"},{"internalType":"uint256","name":"vestingDuration","type":"uint256"},{"internalType":"address","name":"feeAddress","type":"address"},{"internalType":"uint256","name":"initialFeePercent","type":"uint256"}],"internalType":"struct TokenFeeBurnClaimer.Config","name":"_config","type":"tuple"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"claimIdx","type":"uint256"}],"name":"isClaimable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"claimIdx","type":"uint256"}],"name":"isClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"pauseClaiming","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"newTotal","type":"uint256"}],"name":"setAllocation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"unitOfTime","type":"uint256"},{"internalType":"uint256","name":"initialPercent","type":"uint256"},{"internalType":"uint256","name":"initialUnlockDate","type":"uint256"},{"internalType":"uint256","name":"vestingStartDate","type":"uint256"},{"internalType":"uint256","name":"vestingDuration","type":"uint256"},{"internalType":"address","name":"feeAddress","type":"address"},{"internalType":"uint256","name":"initialFeePercent","type":"uint256"}],"internalType":"struct TokenFeeBurnClaimer.Config","name":"_config","type":"tuple"}],"name":"setConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"pools","type":"address[]"}],"name":"setStakingPools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"transferAllocation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
        );
      function C(e) {
        let t = Object.entries(e).reduce((e, t) => {
          let [n, a] = t;
          if (/^\d+$/.test(n)) return e;
          let i = "string" == typeof a && /^\d+$/.test(a) ? new (N())(a) : a;
          return (
            N().isBN(i) && Object.assign(i, { _str: i.toString() }),
            { ...e, [n]: i }
          );
        }, {});
        return (0, v.fF)(t), t;
      }
      var S = n(79007),
        D = n(19554),
        M = n(18269),
        O = n(89031);
      async function P(e) {
        let t = O.iy.address,
          n = [
            {
              address: O.MD.address,
              name: "balanceOf",
              params: [O.MD.address],
            },
            { address: O.MD.address, name: "balanceOf", params: [b.vn] },
            { address: O.MD.address, name: "balanceOf", params: [b.Oc] },
            {
              address: O.MD.address,
              name: "balanceOf",
              params: ["0xeA981417857cB52B0AFd218F53Ee83cabDC390Ed"],
            },
            {
              address: O.MD.address,
              name: "balanceOf",
              params: ["0x1e442E7d3BcDe23fC21b52efbeF10473Ca2dCe46"],
            },
            {
              address: O.MD.address,
              name: "balanceOf",
              params: ["0xb058057bd93b38bb55092e84775967ce8ba8d78d"],
            },
            {
              address: O.MD.address,
              name: "balanceOf",
              params: ["0xA37e3b6962de67362325ff5a44fF4414D617A215"],
            },
            {
              address: O.MD.address,
              name: "balanceOf",
              params: ["0x2b1AD6eBaD818D5E0B29c694577E70f6E9344E91"],
            },
            {
              address: O.MD.address,
              name: "balanceOf",
              params: ["0xfd657e33808237c060f49a0d0e785bac9968d46a"],
            },
          ],
          [...a] = await (0, D.multicallv2)({
            web3: e,
            abi: S.CONTRACTS.erc20.abi,
            calls: n,
            options: { unwrapValues: !0 },
          }),
          i = (0, v.Rh)(
            a.reduce((e, t) => e.add((0, M.toBN)(t)), b.Aj).muln(10),
            O.MD.decimals
          ),
          s = [
            { address: t, name: "balanceOf", params: [b.vn] },
            { address: t, name: "balanceOf", params: [b.Oc] },
            { address: t, name: "balanceOf", params: [t] },
            {
              address: t,
              name: "balanceOf",
              params: ["0x391dcBDdD99400f99fEAA934B22E9D1b131FAFE9"],
            },
            {
              address: t,
              name: "balanceOf",
              params: ["0x15E7bB0B9ac69Ed455f677C6cC7fB5fe8F4B4Cb8"],
            },
          ],
          [...l] = await (0, D.multicallv2)({
            web3: e,
            abi: S.CONTRACTS.erc20.abi,
            calls: s,
            options: { unwrapValues: !0 },
          }),
          r = l.reduce((e, t) => e.add((0, M.toBN)(t)), b.Aj),
          u = r.add(i);
        return (0, v.oT)(u);
      }
      function F(e) {
        let {
            expanded: t,
            title: n,
            titleClassName: s = "",
            contentClassName: l = "",
            children: u,
          } = e,
          [d, o] = (0, i.useState)(t);
        return (0, a.jsxs)("div", {
          className:
            "first:border-none first:pt-0 last:pb-0 space-y-3 pb-4 overflow-hidden",
          children: [
            (0, a.jsxs)("div", {
              className:
                "flex gap-4 items-center justify-between cursor-pointer bg-white/5 rounded-lg px-4 py-3",
              onClick: () => o(!d),
              children: [
                (0, a.jsx)("div", {
                  className: "text-lg "
                    .concat(s, " ")
                    .concat(d ? "" : "opacity-80"),
                  children: n,
                }),
                (0, a.jsx)("div", {
                  children: d ? (0, a.jsx)(r.s$2, {}) : (0, a.jsx)(r.RiI, {}),
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "".concat(l, " ").concat(d ? "px-6" : "hidden"),
              children: u,
            }),
          ],
        });
      }
      function E() {
        let e = (function (e) {
            let { account: t } = (0, p.useUser)(),
              n = (function (e) {
                let { web3: t } = (0, p.useWeb3Provider)();
                return (0, i.useMemo)(() => {
                  if (t && e) return new t.eth.Contract(A, e);
                }, [t, e]);
              })(e),
              [a, s] = (0, i.useState)(),
              [l, r] = (0, i.useState)(),
              [u, d] = (0, i.useState)(),
              [o, c] = (0, i.useState)(),
              [m, y] = (0, i.useState)(!1),
              [f, b] = (0, i.useState)(!1),
              T = (0, i.useCallback)(() => {
                n &&
                  Promise.all([
                    n.methods
                      .config()
                      .call()
                      .then(C)
                      .then((e) => {
                        s(e);
                      }),
                    n.methods.getTotalStats().call().then(C).then(r),
                  ]).then(() => {
                    y(!0);
                  });
              }, [n]),
              x = (0, i.useCallback)(() => {
                n &&
                  t &&
                  (n.methods.getAccountStats(t).call().then(C).then(d),
                  n.methods
                    .getStakingPoolsToMigrate(t)
                    .call()
                    .then((e) => e.map(C))
                    .then(c));
              }, [n, t]);
            (0, i.useEffect)(() => {
              x();
            }, [x]),
              (0, i.useEffect)(() => {
                T();
              }, [T]),
              (0, i.useEffect)(() => {
                if (
                  !(null == a ? void 0 : a.initialUnlockDate) ||
                  1e3 * a.initialUnlockDate.toNumber() < Date.now()
                )
                  return;
                let e = setTimeout(() => {
                  T(), x();
                }, 1e3 * a.initialUnlockDate.toNumber() - Date.now());
                return () => clearTimeout(e);
              }, [null == a ? void 0 : a.initialUnlockDate]);
            let h = Math.floor(
                (Date.now() / 1e3 -
                  (null == a ? void 0 : a.vestingStartDate.toNumber())) /
                  86400
              ),
              g = (null == l ? void 0 : l.currentFeePercent.gtn(0))
                ? (null == a ? void 0 : a.vestingStartDate.toNumber()) +
                  (h + 1) * 86400
                : void 0;
            return {
              account: t,
              config: a,
              totalStats: l,
              userStats: u,
              stakingPools: o,
              nextFeeDecreaseAt: g,
              isLoaded: m,
              isClaiming: f,
              claimAll: function () {
                if (t)
                  return (
                    b(!0),
                    n.methods
                      .claimAll(t)
                      .send({ from: t })
                      .then(() => (x(), T(), { message: "Claimed all" }))
                      .catch(() => ({ error: "Failed to claim" }))
                      .finally(() => b(!1))
                  );
              },
              claimStakingPools: function () {
                if (t)
                  return (
                    b(!0),
                    n.methods
                      .claimStakingPools(t)
                      .send({ from: t })
                      .then(
                        () => (
                          x(), T(), { message: "Migrated all staking pools" }
                        )
                      )
                      .catch(() => ({
                        error: "Failed to migrate staking pools",
                      }))
                      .finally(() => b(!1))
                  );
              },
            };
          })("0x15E7bB0B9ac69Ed455f677C6cC7fB5fe8F4B4Cb8"),
          t = (function () {
            let [e, t] = (0, i.useState)(0);
            return (
              (0, p.useEffectWithWeb3)((e) => {
                let n = () =>
                    P(e).then((e) => {
                      t(e);
                    }),
                  a = setInterval(n, 1e4);
                return (
                  n(),
                  () => {
                    clearInterval(a);
                  }
                );
              }, []),
              { amount: e, getPercent: (e) => (e / 1e9) * 100 }
            );
          })(),
          n = e.totalStats
            ? 1e9 -
              (0, v.oT)(e.totalStats.claimedTokens) +
              (0, v.oT)(
                e.totalStats.burnedTokens.add(e.totalStats.collectedFeeTokens)
              )
            : 0;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("div", {
              className: "mb-9 flex justify-center",
              children: (0, a.jsxs)("div", {
                className:
                  "py-3 px-9 text-center bg-card-secondary bg-opacity-30 rounded-2xl shadow-2xl highlight-shadow",
                children: [
                  (0, a.jsxs)("div", {
                    className: "text-6xl mb-2",
                    children: [
                      (0, a.jsxs)("span", {
                        className: "brand-text",
                        children: [
                          (0, a.jsx)(l.ZP, {
                            start: 100,
                            end: t.getPercent(n),
                            duration: 2,
                            decimals: 1,
                          }),
                          "%",
                        ],
                      }),
                      " ",
                      "\uD83D\uDD25",
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "text-lg text-opacity-80",
                    children: [
                      (0, a.jsx)(l.ZP, {
                        formattingFn: (e) => (0, v.dv)(e, 1).toString(),
                        start: 0,
                        end: n,
                        duration: 2,
                        decimals: 0,
                      }),
                      " ",
                      "$TPAD 2.0 tokens is set to be burned.",
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "text-sm",
                    children: (0, a.jsx)(d.I, {
                      date: "2024-01-03T12:00:00.000Z",
                      shorterIfBig: !1,
                    }),
                  }),
                ],
              }),
            }),
            (0, a.jsxs)("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-6",
              children: [
                (0, a.jsx)("div", {
                  className: "col-span-2 h-full order-2",
                  children: (0, a.jsxs)(o.aX, {
                    cardClassName: "mb-3 h-full",
                    className: "space-y-6",
                    children: [
                      (0, a.jsx)("h2", { children: "Claim your TPAD 2.0" }),
                      (0, a.jsxs)("ul", {
                        children: [
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)("b", {
                                children: "Claim start date:",
                              }),
                              " Nov 29th, 2023, 15:00 UTC",
                            ],
                          }),
                          (0, a.jsxs)("li", {
                            children: [
                              (0, a.jsx)("b", { children: "Claim end date:" }),
                              " Jan 3rd, 2024, 15:00 UTC. After this the",
                              " ",
                              (0, a.jsx)("b", {
                                children: "unclaimed tokens will be burnt",
                              }),
                              ".",
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(j, { claimer: e, symbol: "TPAD" }),
                      (0, a.jsx)("div", {
                        children: (0, a.jsx)(F, {
                          title: (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)(r.gJy, {
                                className:
                                  "text-acc inline-block align-text-top mr-1",
                              }),
                              "  ",
                              "IMPORTANT",
                            ],
                          }),
                          children: (0, a.jsxs)("div", {
                            className: "space-y-3",
                            children: [
                              (0, a.jsx)("p", {
                                children:
                                  "If you claim your amount with an early claiming fee, you will lose the fee amount.",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "All the unclaimed tokens will be burned after the claiming window closes, so make sure to claim before the deadline.",
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "order-1 md:order-2",
                  children: e.isLoaded
                    ? (0, a.jsxs)("div", {
                        className:
                          "grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-6",
                        children: [
                          e.userStats &&
                            (0, a.jsx)(c.Z, {
                              label: "YOUR CLAIMABLE TOKENS",
                              children: (0, v.dv)(
                                null == e
                                  ? void 0
                                  : e.userStats.claimableTokens,
                                1
                              ),
                            }),
                          (0, a.jsx)(c.Z, {
                            label: "TOTAL CLAIMED",
                            children: (0, v.dv)(e.totalStats.claimedTokens, 1),
                          }),
                          (0, a.jsx)(c.Z, {
                            label: "TOTAL TPAD SET TO BURNED",
                            children: (0, v.dv)(
                              e.totalStats.burnedTokens.add(
                                e.totalStats.collectedFeeTokens
                              ),
                              1
                            ),
                          }),
                        ],
                      })
                    : (0, a.jsx)(u.Z, { count: 6 }),
                }),
              ],
            }),
          ],
        });
      }
      function I() {
        return (0, a.jsx)(s.A, {
          navbarVisibility: { levels: !1 },
          children: (0, a.jsx)(E, {}),
        });
      }
    },
    36857: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return u;
        },
      });
      var a = n(85893),
        i = n(27484),
        s = n.n(i),
        l = n(67294),
        r = n(62314);
      function u(e) {
        let { date: t, endText: n = "complete", shorterIfBig: i = !0 } = e,
          [u, d] = (0, l.useState)(() => s()());
        (0, l.useEffect)(() => {
          if (!t) return;
          let e = setInterval(() => d(s()()), 1e3);
          return () => clearInterval(e);
        }, [t]);
        let o = (0, r.og)(u, "number" == typeof t ? s().unix(t) : s()(t));
        return o.asSeconds() > 0
          ? (0, a.jsx)("span", { children: (0, r.US)(o, { smallerIfBig: i }) })
          : (0, a.jsx)("span", { children: n });
      }
    },
    49362: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return l;
        },
      });
      var a = n(85893);
      n(67294);
      var i = n(35704),
        s = n(46365);
      function l(e) {
        let { children: t, navbarVisibility: n } = e;
        return (0, a.jsx)(i.IE, {
          children: (0, a.jsxs)(i.pj, {
            children: [
              (0, a.jsx)(i.O2, { ...n }),
              (0, a.jsx)("div", {
                className:
                  "relative max-w-screen-xll mx-auto py-12 xll:pt-12 xll:pb-16 px-2",
                children: (0, a.jsx)(s.D, { children: t }),
              }),
            ],
          }),
        });
      }
    },
    46365: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return s;
        },
        f: function () {
          return l;
        },
      });
      var a = n(11521),
        i = n(67294);
      let [s, l] = (0, a.default)(function () {
        let [e, t] = (0, i.useState)(),
          n = () => t(void 0);
        return { message: e, setMessage: t, onModalClose: n };
      });
    },
    46661: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return l;
        },
      });
      var a = n(85893);
      n(67294);
      var i = n(35005),
        s = n(89583);
      function l(e) {
        let {
          className: t = "",
          paused: n,
          claim: l,
          disabled: r,
          children: u,
          account: d,
          isClaiming: o,
        } = e;
        return d
          ? n
            ? (0, a.jsx)(i.Z, {
                variant: "outline-light",
                size: "sm",
                disabled: !0,
                className: t,
                children: "Paused",
              })
            : (0, a.jsxs)(i.Z, {
                variant: r ? "outline-secondary" : "outline-primary",
                size: "sm",
                onClick: l,
                disabled: r || void 0 !== o,
                className: t,
                children: [
                  u || "Claim all",
                  void 0 !== o &&
                    (0, a.jsx)(s.koH, {
                      className: "inline-block animate animate-spin ml-2",
                    }),
                ],
              })
          : (0, a.jsx)(i.Z, {
              variant: "outline-light",
              size: "sm",
              disabled: !0,
              className: t,
              children: "Connect wallet first",
            });
      }
    },
    57785: function (e, t, n) {
      "use strict";
      n.d(t, {
        P: function () {
          return i;
        },
      });
      var a = n(22920);
      let i = (e) => {
        "message" in e
          ? a.Am.success(e.message, { position: a.Am.POSITION.BOTTOM_RIGHT })
          : a.Am.error(e.error, { position: a.Am.POSITION.BOTTOM_RIGHT });
      };
    },
    12717: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = n(85893),
        i = n(50549);
      function s(e) {
        let { label: t, children: n } = e;
        return (0, a.jsxs)("div", {
          className:
            "flex flex-col items-center justify-between p-6 xll:mb-0 bg-card-secondary rounded-lg bg-opacity-30",
          children: [
            (0, a.jsx)("div", {
              className:
                "flex items-center font-medium text-2xl sm:text-4xl brand-text brand-text-shadow",
              children: n || (0, a.jsx)(i.Z, { className: "w-20 opacity-10" }),
            }),
            (0, a.jsx)("div", {
              className:
                "text-xs sm:text-sm text-gray-400 text-opacity-80 pt-3",
              children: t,
            }),
          ],
        });
      }
    },
    92703: function (e, t, n) {
      "use strict";
      var a = n(50414);
      function i() {}
      function s() {}
      (s.resetWarningCache = i),
        (e.exports = function () {
          function e(e, t, n, i, s, l) {
            if (l !== a) {
              var r = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((r.name = "Invariant Violation"), r);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: s,
            resetWarningCache: i,
          };
          return (n.PropTypes = n), n;
        });
    },
    45697: function (e, t, n) {
      e.exports = n(92703)();
    },
    50414: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    42473: function (e) {
      "use strict";
      e.exports = function () {};
    },
  },
  function (e) {
    e.O(0, [857, 774, 888, 179], function () {
      return e((e.s = 26537));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=tpadv2-f4adbdbdd20d2829.js.map
